class Caster {
  /**
   * Casts a single value to an approximated type.
   *
   * @param {String} value
   *
   * @returns {Any}
   */
  static single(value) {
    if (/^-?\d+\.?\d*$/.test(value)) {
      return Number(value);
    }
    if (/^(true|false|1|0)$/.test(value)) {
      return Boolean(value);
    }
    if (/^\^.*\$$/.test(value)) {
      return RegExp(value);
    }

    return value;
  }

  /**
   * Casts an array of values to an approximated type.
   *
   * @param {Array<any>} value
   *
   * @returns {Array<any>}
   */
  static array(values) {
    let returnable = [];

    for (let i in values) {
      returnable.push(this.single(values[i]));
    }

    return returnable;
  }
}

module.exports = Caster;
