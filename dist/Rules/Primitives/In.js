const Value = require('../Helpers/GetValue');
const RuleInterface = require('../Helpers/RuleInterface');
const ParameterNotValidException =
  require('../../Exceptions/ParameterNotValid');

class In extends RuleInterface {
  /**
   * Validates that the data given is in a array.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   * @param {Array<any>} searchArray
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, searchArray) {
    let value = Value.get(data, field);

    if (!Array.isArray(searchArray) || searchArray.length < 1) {
      throw new ParameterNotValidException('array');
    }

    if (searchArray.includes(value)) {
      return true;
    }

    return false;
  }
}

module.exports = In;
