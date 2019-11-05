const After = require('../../../dist/Rules/Date/After');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Date after
 */
describe(chalk.cyan('> Processing: Date after tests'), () => {
  it(chalk.magenta('Testing:') + ' date that matches check', (done) => {
    let data = {
      field: '2019-07-01'
    };

    expect(After.validate(data, 'field', '2019-07-01')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' date that occurs before check', (done) => {
    let data = {
      field: '2019-06-01'
    };

    expect(After.validate(data, 'field', '2019-07-01')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' date that occurs after check', (done) => {
    let data = {
      field: '2019-07-20'
    };

    expect(After.validate(data, 'field', '2019-07-01')).to.be.true;
    done();
  });
});
