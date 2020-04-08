const Value = require('../Helpers/GetValue');
const Caster = require('../../Caster');
const RuleInterface = require('../Helpers/RuleInterface');
const ParameterNotValidException =
  require('../../Exceptions/ParameterNotValid');
class Range extends RuleInterface {
  /**
   * Validates that the data given is in a range.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   * @param {Number} floor
   * @param {Number} ceiling
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, floor, ceiling) {
    let value = Caster.single(Value.get(data, field));

    if (
      floor === undefined || typeof floor !== 'number' &&
      ceiling === undefined || typeof ceiling !== 'number'
    ) {
      throw new ParameterNotValidException('number');
    }

    if (typeof value === 'number' && value < ceiling && value > floor) {
      return true;
    }

    return false;
  }
}

module.exports = Range;
