+++
toc = true
draft = false
date = 2022-12-06T10:09:45+01:00
title = "My favourite and most impactful announcements and sessions at AWS re:invent 2022"
description = ""
slug = ""
authors = []
tags = ["software engineering","aws","re:invent2022", "serverless"]
categories = []
externalLink = ""
series = []
+++

## Introduction
In this post, I will be sharing my thoughts on some of the most impactful announcements and sessions that took place at AWS re:invent 2022. re:invent is an annual conference organized by AWS that brings together developers, engineers, and IT professionals to learn about the latest trends and technologies in cloud computing. This year's event featured a wide range of announcements and sessions, and I am excited to share some of my favorite ones with you.

## Sessions

### Building next-gen applications with event-driven architectures
In this talk, Eric Johnson, a Principal Developer Advocate at AWS, discusses building next-generation applications with event-driven architectures. He covers Enterprise Integration patterns, event-driven architecture, and how to build highly scalable, resilient, and observable applications using event-driven architectures. He also discusses the benefits of using serverless technology, such as AWS Lambda, in event-driven architectures, as well as the challenges and considerations to be aware of when implementing them.

Johnson also emphasizes the importance of idempotency in event-driven architectures. Idempotency is the property of certain operations in mathematics and computer science, whereby they can be applied multiple times without changing the result beyond the initial application. In event-driven architectures, this means that a message or event can be processed multiple times without causing unintended side effects or changes to the system. Implementing idempotency in event-driven architectures is crucial for ensuring that applications are highly scalable, resilient, and observable, as it allows for retries and compensating transactions in case of failures or errors.

https://youtu.be/SbL3a9YOW7s

### Architecting secure serverless applications
Josh Kahn discusses the security implications of using serverless architecture. Josh is a leading expert in the field, and has deep knowledge of the challenges and opportunities associated with this approach to building and deploying applications.

The shared responsibility model is explained, with a focus on how it changes with different services, such as Lambda or EventBridge. Josh also highlights the role of IAM in controlling access to these services, and the use of encryption for data in transit and at rest. The session concludes with a brief overview of some common security risks associated with serverless architecture, and how to mitigate them.

Overall, the takeaways from this post are that security is an important consideration when using serverless architecture, and that it is the responsibility of both the customer and the provider (in this case, AWS) to ensure that the system is secure.

https://youtu.be/A8iHQjHv8nY

### Beyond five 9s: Lessons from our highest available data plane
Colin, a VP and distinguished engineer at AWS, discussed the lessons he has learned from working with teams who build some of the company's highest available services. He focused on the data plane parts of these services, which are the most critical and require a lot of attention to detail to ensure the necessary levels of reliability. Colin provided tips and mental models for building highly available systems. He emphasized the importance of going beyond the traditional "five nines" model and considering the reliability of individual components in order to achieve overall availability. His key takeaways included the importance of testing, monitoring, and automation in building highly available systems, as well as the value of using caching, retries, and fairness to improve reliability.

https://youtu.be/es9527rA_8I

### Deploy modern and effective data models with Amazon DynamoDB

Alex Debrie and Amirth Kumar discuss best practices for data modeling with DynamoDB. Alex is an AWS data hero who has worked extensively with DynamoDB, and has spoken at previous AWS re:invent conferences on the topic. Amirth is a senior principal engineer on the DynamoDB team, and has deep knowledge of the database.

The session begins with an overview of DynamoDB, highlighting its key features and capabilities. They then delve into the importance of data modeling, and provide tips and guidance on how to design a schema that will effectively support the needs of the application. They also discuss indexing and transactions, and conclude with a brief overview of some common pitfalls to avoid when working with DynamoDB. Overall, the takeaways from this session are that careful planning and thought should go into data modeling with DynamoDB, and that understanding the unique capabilities and limitations of the database can help ensure using DynamoDb in the best way possible.

https://youtu.be/SC-YAPgJpms

### A day in the life of a billion requests
AWS has improved its request processing to handle billions of requests per second. The system is designed to be secure and efficient, and changes are made without disrupting the customer experience. The authentication process used by AWS involves logging into a website, receiving a cookie, and being redirected back to the website. The TLS protocol is used to protect API calls from eavesdroppers, and the protocol has a signature over the entire request to protect against replay attacks. The video also discusses the use of hashes in signing protocols, and how AWS uses regional caching to improve the performance of API calls. AWS also provides a secure token service that allows for short-term sessions to be created at scale. This session described how AWS services are used to process billions of requests per second without disrupting the customer experience.

https://youtu.be/tPr1AgGkvc4

## New announcements

### Amazon inspector for Lambda
Amazon Inspector has expanded its capabilities to support AWS Lambda functions. The service now automatically discovers all eligible Lambda functions and identifies software vulnerabilities in application package dependencies used in the Lambda function code. Vulnerabilities are initially assessed upon deployment to the Lambda service and continually monitored and reassessed, informed by updates to the function and newly published vulnerabilities. When vulnerabilities are identified, actionable security findings are generated and aggregated in the Amazon Inspector console, as well as pushed to AWS Security Hub and Amazon EventBridge to automate workflows. Amazon Inspector is a vulnerability management service that scans AWS workloads for software vulnerabilities and unintended network exposure across an entire AWS Organization.

https://aws.amazon.com/blogs/aws/amazon-inspector-now-scans-aws-lambda-functions-for-vulnerabilities/

### EventBridge Pipes
point-to-point integrations between event producers and consumers. It expands on Amazon's EventBridge offering by providing a more consistent and cost-effective way to connect applications with data from a variety of sources, including Amazon SQS, Amazon Kinesis, and Amazon DynamoDB. EventBridge Pipes supports the same target services as event buses, and creating a pipe is as simple as selecting a source and target.

It currently does not support cross-account connections, and it does not have a CDK L2 construct yet. Additionally, while EventBridge Pipes does support idempotency for services that support ordering, it is important to be careful when using this feature. If the target fails, EventBridge Pipes will retry the enrichment over the entire pipe, so users should be mindful of this when implementing their pipelines

Lastly, users can customize batching, starting position, concurrency, and more, and can also use optional filtering and enrichment steps to control the flow of events. By removing the need to write and manage integration code, EventBridge Pipes allows users to focus on building their services rather than connecting them.

https://aws.amazon.com/blogs/aws/new-create-point-to-point-integrations-between-event-producers-and-consumers-with-amazon-eventbridge-pipes/

### AWS Verified Access
AWS Verified Access is a new secure connectivity service that allows enterprises to enable local or remote secure access to their corporate applications without requiring a VPN. This service uses AWS Zero Trust security principles and validates each application request before granting access, adapting the security posture based on changing conditions. Verified Access offers three main benefits: it is easy to use for IT administrators and end users, and provides an open ecosystem that allows organizations to retain their existing identity providers and device management systems. This service is currently in preview and supports Chrome and Firefox web browsers.

https://aws.amazon.com/blogs/aws/aws-verified-access-preview-vpn-less-secure-network-access-to-corporate-applications/


### Amazon Security Lake
Amazon Security Lake is a new, purpose-built service designed to centralize an organization's security data from AWS and on-premises sources into a data lake stored in the user's account. Amazon Security Lake automatically collects logs from a variety of sources and converts them into a storage and query-efficient format, making the data immediately usable for security analytics without the need for post-processing. It also allows users to customize data access levels and integrate with analytics partners such as IBM, Splunk, and Sumo Logic. The service aims to reduce the operational overhead of security data management and improve the protection of data, applications, and workloads.

https://aws.amazon.com/about-aws/whats-new/2022/11/amazon-security-lake-preview/


### AWS 0rganizations and AWS Backup now support delegated admin accounts
AWS has introduced delegated administrators for AWS Backup and AWS Organisations. This allows for greater agility and decentralization in governing AWS Organisations and Backup accounts.

https://aws.amazon.com/about-aws/whats-new/2022/11/aws-organizations-delegated-administrator/
https://aws.amazon.com/blogs/storage/delegated-administrator-support-for-aws-backup/

### Step Function Distributed Map
AWS Step Functions has introduced a distributed map state that allows users to write step functions to coordinate large-scale parallel workloads within their serverless applications. This allows users to iterate over millions of objects, such as logs, images, or .csv files stored in Amazon S3, and launch up to 10,000 parallel workflows to process the data. The distributed map state supports a maximum concurrency of 10,000 executions in parallel, which is higher than many other AWS services, and users can use the maximum concurrency feature to ensure that they do not exceed the concurrency of a downstream service. This new feature makes it easier to scale data processing workloads and process large amounts of data in parallel.

It is likely that data scientists and data engineers will use AWS Glue and EMR to process large amounts of data, while application developers will use Step Functions to add serverless data processing to their applications.

https://aws.amazon.com/about-aws/whats-new/2022/12/aws-step-functions-large-scale-parallel-workflows-data-processing-serverless-applications/