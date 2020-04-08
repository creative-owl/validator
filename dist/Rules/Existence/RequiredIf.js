const Caster = require('../../Caster');
const RuleInterface = require('../Helpers/RuleInterface');

class RequiredIf extends RuleInterface {
  /**
   * Validates that the given field is present and filled if another
   * field is in the request.
   *
   * @param {Object<string, string>} data
   * @param {String} field
   * @param {String} check
   * @param {Any} equals
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field, check, equals) {
    let value = data['' + field + ''];
    let checkValue = Caster.single(data['' + check + '']);

    // should be if this check value equals the value provided
    // then if the value exists
    if (equals === checkValue) {
      if (value === '' || value === null || value === undefined) {
        return false;
      }

      return true;
    }

    return false;
  }
}

module.exports = RequiredIf;
