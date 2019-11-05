const Value = require('../Helpers/GetValue');
const RuleInterface = require('../Helpers/RuleInterface');

class Confirmed extends RuleInterface {
  /**
   * Validates that the data given is confirmed by another field.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   * @param {string} checkField
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, checkField) {
    let value = Value.get(data, field);
    let checkValue = Value.get(data, checkField);

    if (value === checkValue) {
      return true;
    }

    return false;
  }
}

module.exports = Confirmed;
