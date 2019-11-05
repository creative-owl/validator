const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: not_equal
 */
describe(chalk.cyan('> Processing: Complex:not_equal feature tests'), () => {
  it(chalk.magenta('Testing passing not equal validation'), (done) => {
    let data = {
      field: 'secret'
    };

    let result = new Validation(data, {
      field: 'not_equal:1'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing not equal validation'), (done) => {
    let data = {
      field: 'secret'
    };

    let result = new Validation(data, {
      field: 'not_equal:secret'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
