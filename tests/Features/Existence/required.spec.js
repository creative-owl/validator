const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: existence: required
 */
describe(chalk.cyan('> Processing: Existence:required feature tests'), () => {
  it(chalk.magenta('Testing passing required validation'), (done) => {
    let data = {
      name: 'test'
    };

    let result = new Validation(data, {
      name: 'required|string'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing required validation'), (done) => {
    let data = {
      field: ''
    };

    let result = new Validation(data, {
      field: 'required|string'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
