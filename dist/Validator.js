/* eslint-disable max-depth */
const lookup = require('./RuleLookup');
const Response = require('./Response');
const RuleCompiler = require('./RuleCompiler');

class Validator {
  /**
   * Constructs a new instance of this class.
   *
   * @param {Object<string, any>} data
   * @param {Object<string, string>} rules
   *
   * @returns {Object<string, string>}
   */
  compile(data, assertions) {
    let results = [];

    for (let field in assertions) {
      results.push(this.run(data, field, assertions[field]));
    }

    return Response.formulate(data, assertions, results);
  }

  /**
   * Runs the rules agains the data.
   *
   * @param {Object<string, any>} data
   * @param {string} field
   * @param {string} assertion
   *
   * @returns {Object<string, string>}
   */
  run(data, field, assertion) {
    let rules = assertion.split('|');
    let returnable = [];

    for (let i in rules) {
      if (rules[i] === 'filled' || rules[i] === 'optional') {
        let result = RuleCompiler.single(data, field, rules, i);
        if (result === false) {
          rules.splice(i, 1);

          returnable.push(true, this.allRules(data, field, rules, i));
        } else if (result === undefined) {
          return [false];
        } else {
          return [true];
        }
      } else {
        returnable.push(this.allRules(data, field, rules, i));
      }
    }

    return returnable;
  }

  allRules(data, field, rules, i) {
    /**
     * Determine if the incoming rule is simple or complex. Simple
     * rules require less effort and therefore bypass the logical
     * gates below. Complex rules must contain a semi-colon.
     *
     * The first order of complex rule sets contain only a semi-colon
     * as well as a single value after this eg.:
     *
     * @example
     *    number_above:10
     * @end
     *
     * The second order of complex rule sets contain a semi-colon as
     * well as a comma as these rules normally run more than one
     * assertion eg.:
     *
     * @example
     *    number_in_range:19,30
     * @end
     *
     * The third order of complex rule sets contain a semi-colon as
     * well as a array of asserstions to run eg.:
     *
     * @example
     *    in:[10,20,30,40,50]
     * @end
     */
    if (rules[i].includes(':')) {
      if (!rules[i].includes(',')) {
        return RuleCompiler.single(data, field, rules, i);
      } else if (
        rules[i].includes(',') &&
        !rules[i].includes('[') &&
        !rules[i].includes(']')
      ) {
        return RuleCompiler.double(data, field, rules, i);
      } else {
        return RuleCompiler.array(data, field, rules, i);
      }
    } else {
      return lookup[rules[i]].validate(data, field);
    }
  }
}

module.exports = Validator;
