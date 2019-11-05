const Value = require('./Helpers/GetValue');
const RuleInterface = require('./Helpers/RuleInterface');
const ParameterNotValidException = require('../Exceptions/ParameterNotValid');

class Regex extends RuleInterface {
  /**
   * Validates given data with a given regex string.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   * @param {string} expression
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, expression) {
    let value = Value.get(data, field);

    if (typeof expression !== 'object' && expression.constructor !== RegExp) {
      throw new ParameterNotValidException('regular expression');
    }

    return expression.test(value);
  }
}

module.exports = Regex;
