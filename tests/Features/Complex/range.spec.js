const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: range
 */
describe(chalk.cyan('> Processing: Complex:range feature tests'), () => {
  it(chalk.magenta('Testing passing range validation'), (done) => {
    let data = {
      field: 1.99
    };

    let result = new Validation(data, {
      field: 'number_in_range:1,22'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing range validation'), (done) => {
    let data = {
      field: 1.99
    };

    let result = new Validation(data, {
      field: 'number_in_range:0,1'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
