const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: in
 */
describe(chalk.cyan('> Processing: Complex:in feature tests'), () => {
  it(chalk.magenta('Testing passing in validation'), (done) => {
    let data = {
      field: 'secret'
    };

    let result = new Validation(data, {
      field: 'in:[secret, true]'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing in validation'), (done) => {
    let data = {
      field: 'secret'
    };

    let result = new Validation(data, {
      field: 'in:[confirmation, 1]'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
