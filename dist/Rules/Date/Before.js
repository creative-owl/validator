const Value = require('../Helpers/GetValue');
const RuleInterface = require('../Helpers/RuleInterface');

class Before extends RuleInterface {
  /**
   * Validates that the given data id after a specific point in time.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   * @param {string} pointInTime
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, pointInTime) {
    let value = Value.get(data, field);
    let givenDate = new Date(value);
    let checkDate = new Date(pointInTime);

    if (givenDate < checkDate) {
      return true;
    }

    return false;
  }
}

module.exports = Before;
