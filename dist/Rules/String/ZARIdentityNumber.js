const Value = require('../Helpers/GetValue');
const RuleInterface = require('../Helpers/RuleInterface');

class ZARIdentityNumber extends RuleInterface {
  /**
   * Validates that the data given is of type: SA ID Number
   *
   * @param {Object<string, string>} data
   * @param {String} field
   *
   * @returns {Object<string, string>}
   */
  static validate(data, field) {
    let value = Value.get(data, field);
    let valueArray = [];

    if (
      value.toString().length < 13 ||
      value.toString().length > 13 ||
      typeof value === 'array' ||
      typeof value === 'object' ||
      value.split('').every(char => char === value[0])
    ) {
      return false;
    }

    for (let i = 0; i < value.length; i++) {
      if ((i + 1) % 2 === 0) {
        if (value[i] * 2 >= 10) {
          valueArray[i] =
            parseInt((value[i] * 2).toString()[0]) +
            parseInt((value[i] * 2).toString()[1]);
        } else {
          valueArray[i] = parseInt(value[i] * 2);
        }
      } else {
        valueArray[i] = parseInt(value[i]);
      }
    }

    return valueArray.reduce(
      (previous, current) => previous + current
    ) % 10 === 0;
  }
}

module.exports = ZARIdentityNumber;
