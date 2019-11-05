const Value = require('../Helpers/GetValue');
const Caster = require('../../Caster');
const RuleInterface = require('../Helpers/RuleInterface');
const ParameterNotValidException =
  require('../../Exceptions/ParameterNotValid');

class Under extends RuleInterface {
  /**
   * Validates that the data given is under a specified value.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   * @param {number} ceiling
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, ceiling) {
    let value = Caster.single(Value.get(data, field));

    if (ceiling === undefined || typeof ceiling !== 'number') {
      throw new ParameterNotValidException('number');
    }

    if (typeof value === 'number' && value < ceiling) {
      return true;
    }

    return false;
  }
}

module.exports = Under;
