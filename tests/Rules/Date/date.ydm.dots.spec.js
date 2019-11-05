const chalk = require('chalk');
const expect = require('chai').expect;
const DateTime = require('../../../dist/Rules/Date/Date');

/**
 * Unit tests: Date
 */
describe(chalk.cyan('> Processing: Date validation tests (year.day.month)'), () => {
  it(chalk.magenta('Testing:') + ' date of format: YYYY.DD.MM', (done) => {
    let data = {
      field: '1987.01.02'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YYYY.D.MM', (done) => {
    let data = {
      field: '1987.01.2'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YYYY.DD.M', (done) => {
    let data = {
      field: '1987.1.02'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YYYY.D.M', (done) => {
    let data = {
      field: '1987.1.2'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YY.DD.MM', (done) => {
    let data = {
      field: '87.01.02'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YY.D.MM', (done) => {
    let data = {
      field: '87.01.2'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YY.DD.M', (done) => {
    let data = {
      field: '87.1.02'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: YY.D.M', (done) => {
    let data = {
      field: '87.1.2'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
});
