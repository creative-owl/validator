const language = require('./Language');

class Response {
  /**
   * Formulates the final response.
   *
   * @param {Object<string, any>} data,
   * @param {Object<string, any>} assertions
   * @param {Array<boolean>} results
   *
   * @returns {Object<string, string>}
   */
  static formulate(data, assertions, results) {
    let returnable = {};
    let assertionArray = this.toArray(assertions);

    for (let i in results) {
      if (results[i].includes(false)) {
        returnable[this.getKeyByValue(assertions, i)] = this.message(
          this.getKeyByValue(assertions, i), assertionArray[i], results[i]
        );
      }
    }

    if (Object.keys(returnable).length > 0) {
      return {
        'status': 'failure',
        'errors': returnable
      };
    }

    return {
      'status': 'success',
      'errors': returnable
    };
  }

  /**
   * Formulated the message that will be sent.
   *
   * @param {String} field
   * @param {String} assertions
   * @param {Array<boolean>} results
   *
   * @returns {String}
   */
  static message(field, assertions, results) {
    let pointer = results.indexOf(false);
    let assertionArray = assertions.split('|');
    let assertionName = language[assertionArray[pointer]];

    if (assertionArray[pointer] === 'required') {
      return `The ${field} field is required!`;
    }

    // eslint-disable-next-line max-len
    return `Error validating ${field} field! The value given is not a valid ${assertionName}!`;
  }

  /**
   * Changes a object to an array.
   *
   * @param {Object<string, any>} object
   *
   * @returns {Array<any>}
   */
  static toArray(object) {
    let returnable = [];

    for (let key in object) {
      returnable.push(object[key]);
    }

    return returnable;
  }

  /**
   * Get object keys by their values.
   *
   * @param {Object<string, any>} object
   * @param {Number} index
   *
   * @returns {String}
   */
  static getKeyByValue(object, index) {
    return Object.keys(object)[index];
  }
}

module.exports = Response;
