const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: under
 */
describe(chalk.cyan('> Processing: Complex:under feature tests'), () => {
  it(chalk.magenta('Testing passing under validation'), (done) => {
    let data = {
      field: 1.99
    };

    let result = new Validation(data, {
      field: 'under:22'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing under validation'), (done) => {
    let data = {
      field: 1.99
    };

    let result = new Validation(data, {
      field: 'under:1'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
