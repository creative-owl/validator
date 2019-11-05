const chalk = require('chalk');
const expect = require('chai').expect;
const Before = require('../../../dist/Rules/Date/Before');

/**
 * Unit tests: Date before
 */
describe(chalk.cyan('> Processing: Date before tests'), () => {
  it(chalk.magenta('Testing:') + ' date that matches check', (done) => {
    let data = {
      field: '2019-07-01'
    };

    expect(Before.validate(data, 'field', '2019-07-01')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' date that occurs before check', (done) => {
    let data = {
      field: '2019-06-01'
    };

    expect(Before.validate(data, 'field', '2019-07-01')).to.be.true;
    done();
  });

  it(chalk.magenta('Testing:') + ' date that occurs after check', (done) => {
    let data = {
      field: '2019-07-20'
    };

    expect(Before.validate(data, 'field', '2019-07-01')).to.be.false;
    done();
  });
});
