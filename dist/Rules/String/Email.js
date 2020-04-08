const Value = require('../Helpers/GetValue');
const RuleInterface = require('../Helpers/RuleInterface');

class Email extends RuleInterface {
  /**
   * Validates that the data given is of type: email address
   *
   * @param {Object<string, string>} data
   * @param {String} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = Value.get(data, field);
    // eslint-disable-next-line max-len
    let expression = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    return expression.test(value);
  }
}

module.exports = Email;
