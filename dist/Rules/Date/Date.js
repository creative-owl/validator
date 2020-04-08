const Value = require('../Helpers/GetValue');
const RuleInterface = require('../Helpers/RuleInterface');

class DateTime extends RuleInterface {
  /**
   * Validates that the data given is of type: date.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = Value.get(data, field);
    let dateObject = new Date(value);

    if (dateObject instanceof Date && !isNaN(dateObject)) {
      return true;
    }

    return false;
  }
}

module.exports = DateTime;
