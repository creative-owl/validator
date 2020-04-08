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
The field under validation must be entirely alpha-numeric characters.

### array
The field under validation must be a JavaScript array.

### bool
The field under validation must be able to be cast as a boolean. Accepted input are ```true```, ```false```.

### date
The field under validation must be a valid, non-relative date according to the JavaScript.

### email
The field under validation must be formatted as an e-mail address. Please note that this is a RegEx check and does not conform to RFC based validation. This will also not validate the existance of the email address.

### integer
The field under validation must be an integer. This is a strict integer type test.

### numeric
The field under validation must be numeric. This checks against JavaScripts' numeric type and therefore will accept any of the following ```10```, ```1.99```, ```"111"``` or ```"1.22"```

### object
The field under validation must be a JavaScript object.

### string
The field under validation must be a string.

### za_id_number
The field under validation must be a valid South African identity number. The field is validated agains the Luhn algorithm.

## Existence
The existence validation rules are a collection of rules used for different existence scenarios and are normally used in conjunction with other rules.

### filled
The field under validation must not be empty when it is present.

### optional
The filed under validation is optional and may be left out.

### required
The field under validation must be present in the input data and not empty. A field is considered "empty" if one of the following conditions are true:

- The value is null.
- The value is an empty string.
- The value is an empty array or empty Countable object.
- The value is an uploaded file with no path.

### required_if:_anotherfield,value_
The field under validation must be present and not empty if the anotherfield field is equal to the value.

### required_with:_foo_
The field under validation must be present and not empty only if the other specified field is present.

## Complex
The complex validation rules are a collection of rules used for complex scenarios where validation requires more robust tooling.

### above:_value_
The field under validation must have a value that is numericaly higher than the number given.

### confirmed:_field_confirmation_
The field under validation must have a matching field of field_confirmation.

### date_after:_value_
The field under validation must be after the date given.

### date_before:_value_
The field under validation must be before the date given.

### date_format:_format_
The field under validation must be of the format given. For example a date given of ```13/12/2010``` would pass validation of ```DD/MM/YYYY``` and fail validation of ```DD-MM-YYYY```.

The formats that may be used to validate against are as follows:
```
'YYYY-MM-DD', 'YYYY-MM-D', 'YYYY-M-DD', 'YYYY-M-D',
'YYYY-DD-MM', 'YYYY-D-MM', 'YYYY-DD-M', 'YYYY-D-M',
'DD-MM-YYYY', 'D-MM-YYYY', 'DD-M-YYYY', 'D-M-YYYY',
'MM-DD-YYYY', 'MM-D-YYYY', 'M-DD-YYYY', 'M-D-YYYY',
'YYYY.MM.DD', 'YYYY.MM.D', 'YYYY.M.DD', 'YYYY.M.D',
'YYYY.DD.MM', 'YYYY.D.MM', 'YYYY.DD.M', 'YYYY.D.M',
'DD.MM.YYYY', 'D.MM.YYYY', 'DD.M.YYYY', 'D.M.YYYY',
'MM.DD.YYYY', 'MM.D.YYYY', 'M.DD.YYYY', 'M.D.YYYY',
'YYYY/MM/DD', 'YYYY/MM/D', 'YYYY/M/DD', 'YYYY/M/D',
'YYYY/DD/MM', 'YYYY/D/MM', 'YYYY/DD/M', 'YYYY/D/M',
'DD/MM/YYYY', 'D/MM/YYYY', 'DD/M/YYYY', 'D/M/YYYY',
'MM/DD/YYYY', 'MM/D/YYYY', 'M/DD/YYYY', 'M/D/YYYY'
```

### equals:_value_
The field under validation must be equal the given value this funciton does not type check.

### in:_[value1, value2...]_
The field under validation must be included in the given array of values.

### max:_value_
The field under validation must not be above the maximum length of the given value.

### min:_value_
The field under validation must have a minimum length of the given value.

### not_equal:_value_
The field under validation must not equal the given value this funciton does not type check.

### not_in:_[value1, value2...]_
The field under validation must not be included in the given array of values.

### number_in_range:_topValue,bottomValue_
The field under validation must be between the ```topValue``` and ```bottomValue```. This check is only numeric and therefore all values must be numeric.

### regex:_regex_
The field under validation must match the given regular expression. Please note the regex must be in JavaScript format.

### under:_value_
The field under validation must have a value that is numericaly lower than the number given.


## Versioning

For versioning we use [SemVer](http://semver.org/).
