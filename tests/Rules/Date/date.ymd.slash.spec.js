const chalk = require('chalk');
const expect = require('chai').expect;
const DateTime = require('../../../dist/Rules/Date/Date');

/**
 * Unit tests: Date
 */
describe(chalk.cyan('> Processing: Date validation tests (year/month/day)'), () => {
  it(chalk.magenta('Testing:') + ' date of format: YYYY/MM/DD', (done) => {
    let data = {
      field: '1987/02/01'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YYYY/MM/D', (done) => {
    let data = {
      field: '1987/2/01'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YYYY/M/DD', (done) => {
    let data = {
      field: '1987/02/1'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YYYY/M/D', (done) => {
    let data = {
      field: '1987/2/1'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YY/MM/DD', (done) => {
    let data = {
      field: '87/02/01'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YY/MM/D', (done) => {
    let data = {
      field: '87/2/01'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YY/M/DD', (done) => {
    let data = {
      field: '87/02/1'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YY/M/D', (done) => {
    let data = {
      field: '87/2/1'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
});
