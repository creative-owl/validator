const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: not_in
 */
describe(chalk.cyan('> Processing: Complex:not_in feature tests'), () => {
  it(chalk.magenta('Testing passing not in validation'), (done) => {
    let data = {
      field: 'secret'
    };

    let result = new Validation(data, {
      field: 'not_in:[1, true]'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing not in validation'), (done) => {
    let data = {
      field: 'secret'
    };

    let result = new Validation(data, {
      field: 'not_in:[secret, 1]'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
