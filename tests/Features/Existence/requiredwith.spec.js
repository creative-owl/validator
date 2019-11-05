const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: existence: required_with
 */
describe(chalk.cyan('> Processing: Existence:required_with feature tests'), () => {
  it(chalk.magenta('Testing passing required with validation'), (done) => {
    let data = {
      field: 'something',
      check: 'test'
    };

    let result = new Validation(data, {
      field: 'required_with:check'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing required with validation (null)'), (done) => {
    let data = {
      field: null,
      check: 'test'
    };

    let result = new Validation(data, {
      field: 'required_with:check'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
  it(chalk.magenta('Testing failing required with validation (missing)'), (done) => {
    let data = {
      field: 'test'
    };

    let result = new Validation(data, {
      field: 'required_with:check'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
