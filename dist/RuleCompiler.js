const lookup = require('./RuleLookup');
const Caster = require('./Caster');

class RuleCompiler {
  /**
   * Asserts a rule that has only a single assertion.
   *
   * @param {Object<string, any>} data
   * @param {String} field
   * @param {Array<string>} rules
   * @param {Number} i
   *
   * @returns {Array<boolean>}
   */
  static single(data, field, rules, i) {
    let parts = rules[i].split(':');
    let rule = parts[0];
    let test = parts[1];

    return lookup[rule].validate(
      data, field, Caster.single(test)
    );
  }

  /**
   * Asserts a rule that has two assertion.
   *
   * @param {Object<string, any>} data
   * @param {String} field
   * @param {Array<string>} rules
   * @param {Number} i
   *
   * @returns {Array<boolean>}
   */
  static double(data, field, rules, i) {
    let parts = rules[i].split(':');
    let rule = parts[0];
    let tests = parts[1].split(',');

    return lookup[rule].validate(
      data,
      field,
      Caster.single(tests[0]),
      Caster.single(tests[1])
    );
  }

  /**
   * Asserts a rule that has multiple assertion.
   *
   * @param {Object<string, any>} data
   * @param {String} field
   * @param {Array<string>} rules
   * @param {Number} i
   *
   * @returns {Array<boolean>}
   */
  static array(data, field, rules, i) {
    let parts = rules[i].split(':');
    let rule = parts[0];
    let tests = (((parts[1].split('['))[1].split(']'))[0]).split(',');

    return lookup[rule].validate(
      data,
      field,
      Caster.array(tests),
    );
  }
}

module.exports = RuleCompiler;
