const Value = require('../Helpers/GetValue');
const RuleInterface = require('../Helpers/RuleInterface');
const FieldNotPresentException =
  require('../../../dist/Exceptions/FieldNotPresent');

class NotEqual extends RuleInterface {
  /**
   * Validates that the data given is not equal to a check
   *
   * @param {Object<string, string>} data
   * @param {string} field
   * @param {any} check
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, check) {
    let value = Value.get(data, field);

    if (check === undefined || check === null || check === '') {
      throw new FieldNotPresentException();
    }

    if (value !== check) {
      return true;
    }

    return false;
  }
}

module.exports = NotEqual;
