const RuleInterface = require('../Helpers/RuleInterface');

class Optional extends RuleInterface {
  /**
   * Validates that the given field may be optional in within the data
   * set. The field may be omitted, null, empty or undefined.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = data['' + field + ''];

    if (value === '' || value === null || value === undefined) {
      return true;
    }

    return false;
  }
}

module.exports = Optional;
