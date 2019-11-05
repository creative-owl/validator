const FieldNotPresentException = require('../../Exceptions/FieldNotPresent');

class Value {
  /**
   * Gets a field from the given data.
   *
   * @param {Object<string, string>} data
   * @param {string} field
   *
   * @returns {any}
   */
  static get(data, field) {
    let value = data['' + field + ''];

    if (value === undefined) {
      throw new FieldNotPresentException();
    }

    return value;
  }
}

module.exports = Value;
