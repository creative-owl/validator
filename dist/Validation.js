const Validator = require('./Validator');

class Validation {
  /**
   * Constructs a new instance of this class.
   *
   * @param {Object<string, any>} data
   * @param {Object<string, string>} rules
   *
   * @returns {void}
   */
  constructor(data, rules) {
    let validations = new Validator();

    return validations.compile(data, rules);
  }
}

module.exports = Validation;
