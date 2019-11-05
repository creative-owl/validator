const Value = require('../Helpers/GetValue');
const Formats = require('./Helpers/FormatList');
const Enforcer = require('./Helpers/FormatEnforcer');
const RuleInterface = require('../Helpers/RuleInterface');

class DateFormat extends RuleInterface {
  /**
   * Validates that the date given is in the format supplied.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   * @param {string} format
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, format) {
    let value = Value.get(data, field);
    let enforcer = new Enforcer();

    if (format === undefined || !Formats.includes(format)) {
      return false;
    }

    if (enforcer.validate(value, format)) {
      return true;
    }

    return false;
  }
}

module.exports = DateFormat;
