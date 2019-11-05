const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: date_after
 */
describe(chalk.cyan('> Processing: Complex:date_after feature tests'), () => {
  it(chalk.magenta('Testing passing date after validation'), (done) => {
    let data = {
      field: '2019-08-02'
    };

    let result = new Validation(data, {
      field: 'date_after:2019-08-01'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing date after validation'), (done) => {
    let data = {
      field: '2019-08-01'
    };

    let result = new Validation(data, {
      field: 'date_after:2019-09-01'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
