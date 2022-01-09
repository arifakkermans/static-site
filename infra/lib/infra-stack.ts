import {
  aws_certificatemanager as acm,
  aws_cloudfront as cloudfront,
  aws_route53 as route53,
  aws_route53_targets as route53Targets,
  aws_s3 as s3,
  aws_s3_deployment as s3_deploy,
  CfnOutput, Fn, Stack, StackProps, RemovalPolicy,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const certificateArn = 'arn:aws:acm:us-east-1:836095276156:certificate/64286799-3a37-475c-9a1a-fb2977bf74e7'
    const domain = 'arifakkermans.com'
    const zone = route53.HostedZone.fromLookup(this, 'baseZone', {
      domainName: domain
    });

    const bucket = new s3.Bucket(this, 'bucket', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      cors: [{
        allowedMethods: [s3.HttpMethods.GET],
        allowedOrigins: ['*'],
        allowedHeaders: ['*']
      }],
      publicReadAccess: true,
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY
    });

    // Bucket to hold the static website
    new s3_deploy.BucketDeployment(this, 'deploy', {
      sources: [s3_deploy.Source.asset('../site/public')],
      destinationBucket: bucket,
      retainOnDelete: false
    });

    const origin = new cloudfront.OriginAccessIdentity(this, "BucketOrigin", {
      comment: domain,
    });
    (origin.node.defaultChild as cloudfront.CfnCloudFrontOriginAccessIdentity).overrideLogicalId('BucketOrigin');

    // Add a cloudfront Function to a Distribution for pretty urls
    const cfFunction = new cloudfront.Function(this, 'Function', {
      code: cloudfront.FunctionCode.fromInline(`
        function handler(event) {
          var request = event.request;
          var indexPath = new RegExp("/$");
          var match = indexPath.exec(request.uri);
          var newURL = request.uri;
        
          if (match) {
            newURL = '\${request.uri}index.html';
          }
        
          request.uri = newURL;
          return request;
        }
      `),
      functionName: 'hugo-rewrite-url'
      })

    // CloudFront distribution
    const cert = acm.Certificate.fromCertificateArn(this, 'Certificate', certificateArn);
    const cdn = new cloudfront.CloudFrontWebDistribution(this, 'CloudFront', {
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,
        originConfigs: [{
            behaviors: [{
              isDefaultBehavior: true,
              functionAssociations: [
                {
                  eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
                  function: cfFunction,
                },
              ],
            }],
            s3OriginSource: {
                s3BucketSource: bucket,
                originAccessIdentity: origin
            }
        }],
        viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(cert, {
            aliases: [domain],
            securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
        }),
    })

    // DNS alias for the CloudFront distribution
    new route53.ARecord(this, 'CloudFrontDNSRecord', {
      recordName: domain + '.',
      zone,
      target: route53.RecordTarget.fromAlias(new route53Targets.CloudFrontTarget(cdn)),
    });

    // Configure Outputs
    new CfnOutput(this, 'URL', {
        description: 'The URL of the workshop',
        value: 'https://' + domain,
    })

    new CfnOutput(this, 'CloudFrontURL', {
        description: 'The CloudFront distribution URL',
        value: 'https://' + cdn.distributionDomainName,
    })


    if (zone.hostedZoneNameServers) {
        new CfnOutput(this, 'Nameservers', {
            description: 'Nameservers for DNS zone',
            value: Fn.join(', ', zone.hostedZoneNameServers)
        })
    }
  }
}