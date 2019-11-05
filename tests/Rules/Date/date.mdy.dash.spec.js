const chalk = require('chalk');
const expect = require('chai').expect;
const DateTime = require('../../../dist/Rules/Date/Date');

/**
 * Unit tests: Date
 */
describe(chalk.cyan('> Processing: Date validation tests (month-day-year)'), () => {
  it(chalk.magenta('Testing:') + ' date of format: MM-DD-YYYY', (done) => {
    let data = {
      field: '02-01-1987'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: MM-D-YYYY', (done) => {
    let data = {
      field: '2-01-1987'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: M-DD-YYYY', (done) => {
    let data = {
      field: '02-1-1987'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: M-D-YYYY', (done) => {
    let data = {
      field: '2-1-1987'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: MM-DD-YY', (done) => {
    let data = {
      field: '02-01-87'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: MM-D-YY', (done) => {
    let data = {
      field: '2-01-87'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: M-DD-YY', (done) => {
    let data = {
      field: '02-1-87'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: M-D-YY', (done) => {
    let data = {
      field: '2-1-87'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
});
