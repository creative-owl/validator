const RuleInterface = require('../Helpers/RuleInterface');

class Required extends RuleInterface {
  /**
   * Validates that the given field is present.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = data['' + field + ''];

    if (value === '' || value === null || value === undefined) {
      return false;
    }

    return true;
  }
}

module.exports = Required;
