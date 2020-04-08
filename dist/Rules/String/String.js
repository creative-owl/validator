const Value = require('../Helpers/GetValue');
const RuleInterface = require('../Helpers/RuleInterface');

class Str extends RuleInterface {
  /**
   * Validates that the data given is of type: string.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = Value.get(data, field);

    if (typeof value === 'string') {
      return true;
    }

    return false;
  }
}

module.exports = Str;
