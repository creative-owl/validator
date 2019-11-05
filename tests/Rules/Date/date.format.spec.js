const chalk = require('chalk');
const expect = require('chai').expect;
const DateFormat = require('../../../dist/Rules/Date/Format');

/**
 * Unit tests: Date format
 */
describe(chalk.cyan('> Processing: Date format validation'), () => {
  it(chalk.magenta('Testing:') + ' valid date format dashes', (done) => {
    let data = {
      field: '1987-03-22'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY-MM-DD')).to.be.true;
    done();
  });

  it(chalk.magenta('Testing:') + ' valid date format dots', (done) => {
    let data = {
      field: '1987.03.22'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY.MM.DD')).to.be.true;
    done();
  });

  it(chalk.magenta('Testing:') + ' valid date format slash', (done) => {
    let data = {
      field: '1987/03/22'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/MM/DD')).to.be.true;
    done();
  });

  it(chalk.magenta('Testing:') + ' valid date format unsupported', (done) => {
    let data = {
      field: '1987/03/22'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY,MM,DD')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' invalid date format supported', (done) => {
    let data = {
      field: '1987,03,22'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/MM/DD')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' month incorrect', (done) => {
    let data = {
      field: '1987/99/22'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/MM/DD')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' day incorrect', (done) => {
    let data = {
      field: '1987/03/33'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/MM/DD')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' year incorrect', (done) => {
    let data = {
      field: '87/03/33'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/MM/DD')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' leap year correct', (done) => {
    let data = {
      field: '2008/02/29'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/MM/DD')).to.be.true;
    done();
  });

  it(chalk.magenta('Testing:') + ' leap year incorrect', (done) => {
    let data = {
      field: '2007/02/29'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/MM/DD')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' incorrect date length', (done) => {
    let data = {
      field: '2007/01'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/MM/DD')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' incorrect day length', (done) => {
    let data = {
      field: '2007/01/111'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/MM/DD')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' incorrect month length', (done) => {
    let data = {
      field: '2007/011/11'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/MM/DD')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' incorrect month length', (done) => {
    let data = {
      field: '2007/011/11'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/MM/DD')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' format YYYY/M/DD', (done) => {
    let data = {
      field: '1976/3/11'
    };

    expect(DateFormat.validate(data, 'field', 'YYYY/M/DD')).to.be.true;
    done();
  });

  it(chalk.magenta('Testing:') + ' format M/DD/YYYY', (done) => {
    let data = {
      field: '3/11/1976'
    };

    expect(DateFormat.validate(data, 'field', 'M/DD/YYYY')).to.be.true;
    done();
  });
});
