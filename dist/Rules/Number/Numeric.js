const Value = require('../Helpers/GetValue');
const Caster = require('../../Caster');
const RuleInterface = require('../Helpers/RuleInterface');

class Numeric extends RuleInterface {
  /**
   * Validates that the data given is of type: numeric.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = Caster.single(Value.get(data, field));

    if (typeof value === 'number') {
      return true;
    }

    return false;
  }
}

module.exports = Numeric;
