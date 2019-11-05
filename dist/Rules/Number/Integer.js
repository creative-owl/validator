const Value = require('../Helpers/GetValue');
const Caster = require('../../Caster');
const RuleInterface = require('../Helpers/RuleInterface');

class Integer extends RuleInterface {
  /**
   * Validates that the data given is of type: integer.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = Caster.single(Value.get(data, field));

    if (Number.isInteger(value)) {
      return true;
    }

    return false;
  }
}

module.exports = Integer;
