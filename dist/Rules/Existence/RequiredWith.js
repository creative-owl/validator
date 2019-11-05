const RuleInterface = require('../Helpers/RuleInterface');

class RequiredWith extends RuleInterface {
  /**
   * Validates that the given field is present and filled if another
   * field is in the request.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   * @param {string} check
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, check) {
    let value = data['' + field + ''];
    let checkValue = data['' + check + ''];

    if (value === '' || value === null || value === undefined) {
      return false;
    }

    if (checkValue === '' || checkValue === null || checkValue === undefined) {
      return false;
    }

    return true;
  }
}

module.exports = RequiredWith;
