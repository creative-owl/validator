const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: date_before
 */
describe(chalk.cyan('> Processing: Complex:date_before feature tests'), () => {
  it(chalk.magenta('Testing passing date before validation'), (done) => {
    let data = {
      field: '2019-08-02'
    };

    let result = new Validation(data, {
      field: 'date_before:2019-09-01'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing date before validation'), (done) => {
    let data = {
      field: '2019-09-20'
    };

    let result = new Validation(data, {
      field: 'date_before:2019-09-01'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
