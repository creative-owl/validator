const Value = require('./Helpers/GetValue');
const RuleInterface = require('./Helpers/RuleInterface');
const ParameterNotValidException = require('../Exceptions/ParameterNotValid');

class Min extends RuleInterface {
  /**
   * Validates the data length is longer than the given minimum.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   * @param {number} min
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, min) {
    let value = Value.get(data, field);

    if (min === undefined || typeof min !== 'number') {
      throw new ParameterNotValidException('number');
    }

    if (Array.isArray(value) || typeof (value) === 'string') {
      return value.length >= min;
    }

    return false;
  }
}

module.exports = Min;
