const Validation = require('./Validation');

async function validate(data, rules) {
  return new Validation(data, rules);
}

module.exports = validate;
