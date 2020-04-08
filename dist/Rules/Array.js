const Value = require('./Helpers/GetValue');
const RuleInterface = require('./Helpers/RuleInterface');

class Arr extends RuleInterface {
  /**
   * Validates that the data given is of type: array.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = Value.get(data, field);

    if (Array.isArray(value)) {
      return true;
    }

    return false;
  }
}

module.exports = Arr;
