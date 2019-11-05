const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: max
 */
describe(chalk.cyan('> Processing: Complex:max feature tests'), () => {
  it(chalk.magenta('Testing passing max validation'), (done) => {
    let data = {
      field: 'something',
    };

    let result = new Validation(data, {
      field: 'max:9'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing max validation'), (done) => {
    let data = {
      field: 'something',
    };

    let result = new Validation(data, {
      field: 'max:2'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
