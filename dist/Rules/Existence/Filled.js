const RuleInterface = require('../Helpers/RuleInterface');

class Filled extends RuleInterface {
  /**
   * Validates that the given field may be filled in within the data
   * set. The field may be null or empty.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = data['' + field + ''];

    if (value === '' || value === null) {
      return true;
    }
    if (value === undefined) {
      return undefined;
    }

    return false;
  }
}

module.exports = Filled;
