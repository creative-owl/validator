# Validator

The validator provides an easy to use uniform method of validating data types in JavaScript.

## Installing

Using npm:

```bash
$ npm install @creativeowl/validator
```

## How to use

To use the module within your project you will need to have installed the package via NPM. Once included you may use the package anywhere as follows:

```js
const validate = require('@creativeowl/validator');
```

All validation requests should follow the following use of the validation function:

```js
validate(
  DataObject {Object<string, any>},
  RuleObject {Object<string, string>}
);
```

The data object should contain the data in key value form that you would like to validate. The rule object should follow the following convention:

```js
{
  dataKey: 'rule|rule'
}
```
<br />

# Rules

## Simple

The simple validation rules are a collection of rules used for type checking and very simple validation scenarios.

### alpha
The field under validation must be entirely alphabetic characters.

### alpha_numeric
### array
### bool
### date
### email
### integer
### numeric
### object
### string
### za_id_number
### za_phone_number

## Versioning

For versioning we use [SemVer](http://semver.org/).
