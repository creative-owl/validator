const Value = require('./Helpers/GetValue');
const RuleInterface = require('./Helpers/RuleInterface');
const ParameterNotValidException = require('../Exceptions/ParameterNotValid');

class Max extends RuleInterface {
  /**
   * Validates the data length is no longer than the given maximum.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   * @param {Number} max
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, max) {
    let value = Value.get(data, field);

    if (max === undefined || typeof max !== 'number') {
      throw new ParameterNotValidException('integer');
    }

    if (Array.isArray(value) || typeof (value) === 'string') {
      return value.length <= max;
    }

    return false;
  }
}

module.exports = Max;
