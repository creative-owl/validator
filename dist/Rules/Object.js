const Value = require('./Helpers/GetValue');
const RuleInterface = require('./Helpers/RuleInterface');

class Obj extends RuleInterface {
  /**
   * Validates that the data given is of type: object.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = Value.get(data, field);

    if (
      typeof value === 'object' &&
      value !== null &&
      value.constructor === Object
    ) {
      return true;
    }

    return false;
  }
}

module.exports = Obj;
