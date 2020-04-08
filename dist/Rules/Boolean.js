const Value = require('./Helpers/GetValue');
const Caster = require('../Caster');
const RuleInterface = require('./Helpers/RuleInterface');

class Bool extends RuleInterface {
  /**
   * Validates that the data given is of type: boolean.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = Caster.single(Value.get(data, field));

    if (
      typeof value === 'boolean' ||
      value === 'true' ||
      value === 'false'
    ) {
      return true;
    }

    return false;
  }
}

module.exports = Bool;
