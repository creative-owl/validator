const Value = require('../Helpers/GetValue');
const RuleInterface = require('../Helpers/RuleInterface');
const ParameterNotValidException =
  require('../../Exceptions/ParameterNotValid');

class Above extends RuleInterface {
  /**
   * Validates that the data given is above a specified value.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   * @param {number} floor
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, floor) {
    let value = Value.get(data, field);

    if (floor === undefined || typeof floor !== 'number') {
      throw new ParameterNotValidException('number');
    }

    if (typeof value === 'number' && value > floor) {
      return true;
    }

    return false;
  }
}

module.exports = Above;
