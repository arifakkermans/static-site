+++ 
draft = true
date = 2022-01-21T09:53:35+01:00
title = "My Visual Studio Code Setup as a Cloud Engineer "
description = ""
slug = ""
authors = []
tags = ["software development","aws","vscode"]
categories = []
externalLink = ""
series = []
+++
## My Theme: [Monokai Pro](https://monokai.pro/)
The carefully selected shades of functional colors, syntax highlighting, and pixel-perfect file icons of this theme ensure faster coding, non-distractive UI, and a smoother experience. Support the Devs by purchasing a license if you enjoy this visually pleasing theme.

![](/images/monokai.jpg)

##  My Shell environment
I use [Fish](https://fishshell.com/) shell with the [Agnoster](https://github.com/oh-my-fish/theme-agnoster) theme for development. I really love Fish 🐟. In my opinion it is much more convenient to use than standard bash thanks to the tab completion, autosuggestions and syntax highlighting features. The learning curve is also not that high.
## Language support extensions
- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) My go to runtime for Serverless development.
- [Terraform](https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform) Adds syntax highlighting and other editing features for Terraform files.
- [AWS CloudFormation](https://marketplace.visualstudio.com/items?itemName=kddejong.vscode-cfn-lint) Linter for CFN templates, the plugin uses [cfn-lint](https://github.com/aws-cloudformation/cfn-lint).
- [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) Linter for YAML files.

## My Favorite Extensions 

### [AWS Toolkit](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.aws-toolkit-vscode)
I do a lot of AWS Lambda development with the Serverless Application Model (SAM), and properly testing and debugging Lambdas in AWS is a pain. This toolkit makes it easy to test and debug your functions locally. I heavily rely on this extension to interact with AWS. It makes switching between AWS Credential Profiles convenient. Ultimately, the AWS Toolkit for VS Code allows me to be more productive when building applications on AWS. 

### [ShellCheck](https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck)
I use shell scripts to quickly automate various tasks using the AWS CLI. My rule of thumb is that if I need to run something once, create a quick and dirty shell script, otherwise, I'll use Python. ShellCheck is an open-source static analysis tool that automatically finds bugs in your shell scripts. You can improve the quality of your bash/sh shell scripts quality greatly by using the ShellCheck lint script analysis tool.

### [Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
You can directly edit and save .drawio files within VS Code. Removes the need to leave VS Code to create designs. 

### [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
Provides markdown linting, shortcuts, tables, live previews, and many more features. This extension allow me to be more productive when writing README's or blog posts (I use [Hugo](https://gohugo.io/) to write the blogs).

### [Python Code formatting](https://github.com/psf/black)
I use [Black](https://github.com/psf/black) as a code formatter for Python. I think Black is really simple to setup. It allows me to not have to think about code formatting anymore. I've setup my editor so it formats my code when it saves.

### [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
I'm not a Vim expert by any means. I started using this extension basically based on recommendations from one of my colleagues. This extension allows me to have the benefits of Vim to navigate quickly, make some changes, and repeat the process, and maybe one day: “Code at the speed of thought” 👨🏻‍💻.
