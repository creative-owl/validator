const Value = require('../Helpers/GetValue');
const Caster = require('../../Caster');
const RuleInterface = require('../Helpers/RuleInterface');

class AlphaNumeric extends RuleInterface {
  /**
   * Validates that the data given is of type: alpha numeric characters
   * only.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = Caster.single(Value.get(data, field));
    let expression = /^[A-Za-z0-9]+$/;

    if (typeof value === 'boolean') {
      return false;
    }

    return expression.test(value);
  }
}

module.exports = AlphaNumeric;
