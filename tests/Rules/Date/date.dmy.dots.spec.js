const chalk = require('chalk');
const expect = require('chai').expect;
const DateTime = require('../../../dist/Rules/Date/Date');

/**
 * Unit tests: Date
 */
describe(chalk.cyan('> Processing: Date validation tests (day.month.year)'), () => {
  it(chalk.magenta('Testing:') + ' date of format: DD.MM.YYYY', (done) => {
    let data = {
      field: '02.01.1987'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: D.MM.YYYY', (done) => {
    let data = {
      field: '2.01.1987'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: DD.M.YYYY', (done) => {
    let data = {
      field: '02.1.1987'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: D.M.YYYY', (done) => {
    let data = {
      field: '2.1.1987'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: DD.MM.YY', (done) => {
    let data = {
      field: '02.01.87'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: D.MM.YY', (done) => {
    let data = {
      field: '2.01.87'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: DD.M.YY', (done) => {
    let data = {
      field: '02.1.87'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' date of format: D.M.YY', (done) => {
    let data = {
      field: '2.1.87'
    };

    expect(DateTime.validate(data, 'field')).to.be.true;
    done();
  });
});
