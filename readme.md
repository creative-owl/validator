# Validator

The dotsure validator provides an easy to use uniform method of validating incoming requests. The validator takes in a set of data and a set of rules that will be validated against.

## Getting started

To get started with the package make sure you are a memeber of the @dotsure corporate NPM name space.

### Prerequistes

You must have Node.js and NPM installed and functioning on your computer. You will also need to be a member of the @dotsure namespace and be logged into NPM via the command line.

To gain access to the @dotsure namepsace do the following:

- Create a NPM account
- Enable 2 factor authentication and set it up
- Request access to @dotsure
- Your request should be accepted by the namespace admin

### Installing

To install the project and get up and running run the following commands:

```bash
> npm i @dotsure/validator
```

## How to use

To use the module within your project you will need to have installed the package via NPM. Once included you may use the logger anywhere as follows:

```js
const Validator = require('@dotsure/validator');
```

### Examples

// Examples

## Contributing

To contribute to this module please clone the repository by running the following command:

```bash
> git clone git@bitbucket.org:netwarriors/validator.git
```

Once you have cloned the repository you will need to create a feature branch for the given contribution. All work must be associated with a ticket logged within the dotsure Jira project management software, any commit that does not follow the below pattern will automaticaaly be revoked

```bash
> git commit -m 'DDD-111 | Added a cool new feature'
```

### Code style

This project uses ESLint to manage code style. Please make sure to activate ESLint when working on this project.

## Running tests

To run all tests use the standard node test command. When contributing please make sure you write tests for any changes that are being made and that these tests maintain at minimum a 95% coverage on the entire code base. It is also suggested that both passing and failing scenarios are accounted for.

## Versioning

For versioning we use [SemVer](http://semver.org/).
