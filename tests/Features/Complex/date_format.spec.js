const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: date_format
 */
describe(chalk.cyan('> Processing: Complex:date_format feature tests'), () => {
  it(chalk.magenta('Testing passing date format validation'), (done) => {
    let data = {
      field: '2019-08-02'
    };

    let result = new Validation(data, {
      field: 'date_format:YYYY-MM-DD'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing date format validation'), (done) => {
    let data = {
      field: '2019-09-20'
    };

    let result = new Validation(data, {
      field: 'date_format:DD/MM/YYYY'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
