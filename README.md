# static-site

## Guide

This website is built with markdown as a static HTML site using [hugo](http://gohugo.io).

```bash
$ brew install hugo
```

You'll find the content of the website in the [site/](site/) directory.

You can start up a local development server by running:

```bash
$ cd site
$ hugo server -D
$ open http://localhost:1313/
```

## Website Infrastructure

The website is available at https://arifakkermans.com. It's a static website
hosted on S3 and served through CloudFront. GitHub actions is used to build the files and push the content to S3.