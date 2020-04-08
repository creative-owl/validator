const Value = require('../Helpers/GetValue');
const RuleInterface = require('../Helpers/RuleInterface');

class ZARTelephoneNumber extends RuleInterface {
  /**
   * Validates that the data given is of type: alphabetic characters
   * only.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = Value.get(data, field);
    let expression = /^0([0-9]{9})$/;

    if (
      value.toString().length < 10 ||
      value.toString().length > 10 ||
      typeof value === 'array' ||
      typeof value === 'object' ||
      value.split('').every(char => char === value[0])
    ) {
      return false;
    }

    return expression.test(value);
  }
}

module.exports = ZARTelephoneNumber;
