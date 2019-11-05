const In = require('./Rules/Primitives/In');
const Dt = require('./Rules/Date/Date');
const Max = require('./Rules/Max');
const Min = require('./Rules/Min');
const Arr = require('./Rules/Array');
const Obj = require('./Rules/Object');
const Str = require('./Rules/String/String');
const Bool = require('./Rules/Boolean');
const Regex = require('./Rules/Regex');
const Alpha = require('./Rules/String/Alpha');
const Email = require('./Rules/String/Email');
const NotIn = require('./Rules/Primitives/NotIn');
const Equals = require('./Rules/Primitives/Equals');
const Filled = require('./Rules/Existence/Filled');
const Numeric = require('./Rules/Number/Numeric');
const Integer = require('./Rules/Number/Integer');
const NotEqual = require('./Rules/Primitives/NotEqual');
const Optional = require('./Rules/Existence/Optional');
const Required = require('./Rules/Existence/Required');
const Confirmed = require('./Rules/Primitives/Confirmed');
const DateAfter = require('./Rules/Date/After');
const DateFormat = require('./Rules/Date/Format');
const DateBefore = require('./Rules/Date/Before');
const RequiredIf = require('./Rules/Existence/RequiredIf');
const NumberUnder = require('./Rules/Number/Under');
const NumberAbove = require('./Rules/Number/Above');
const NumberRange = require('./Rules/Number/Range');
const AlphaNumeric = require('./Rules/String/AlphaNumeric');
const RequiredWith = require('./Rules/Existence/RequiredWith');
const ZARIdentityNumber = require('./Rules/String/ZARIdentityNumber');
const ZARTelephoneNumber = require('./Rules/String/ZARTelephoneNumber');

module.exports = {
  in: In,
  max: Max,
  min: Min,
  date: Dt,
  bool: Bool,
  array: Arr,
  regex: Regex,
  alpha: Alpha,
  email: Email,
  under: NumberUnder,
  above: NumberAbove,
  not_in: NotIn,
  object: Obj,
  equals: Equals,
  string: Str,
  filled: Filled,
  numeric: Numeric,
  integer: Integer,
  not_equal: NotEqual,
  optional: Optional,
  required: Required,
  confirmed: Confirmed,
  date_after: DateAfter,
  date_format: DateFormat,
  date_before: DateBefore,
  required_if: RequiredIf,
  za_id_number: ZARIdentityNumber,
  alpha_numeric: AlphaNumeric,
  required_with: RequiredWith,
  number_in_range: NumberRange,
  za_phone_number: ZARTelephoneNumber
};
