const chalk = require('chalk');
const expect = require('chai').expect;
const DateTime = require('../../../dist/Rules/Date/Date');

/**
 * Unit tests: Date
 */
describe(chalk.cyan('> Processing: Date validation tests (invalids)'), () => {
  it(chalk.magenta('Testing:') + ' invalid: 13-13-1987', (done) => {
    let data = {
      field: '13-13-1987'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 1987-13-13', (done) => {
    let data = {
      field: '1987-13-13'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 0/1/2001', (done) => {
    let data = {
      field: '0/1/2001'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 1/0/2001', (done) => {
    let data = {
      field: '1/0/2001'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 00/01/2100', (done) => {
    let data = {
      field: '00/01/2100'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 01/0/2001', (done) => {
    let data = {
      field: '01/0/2001'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 0101/2001', (done) => {
    let data = {
      field: '0101/2001'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 01/131/2001', (done) => {
    let data = {
      field: '01/131/2001'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 31/31/2001', (done) => {
    let data = {
      field: '31/31/2001'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 101/12/1974', (done) => {
    let data = {
      field: '101/12/1974'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 56/56/56', (done) => {
    let data = {
      field: '56/56/56'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 00/00/0000', (done) => {
    let data = {
      field: '00/00/0000'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 0/0/1999', (done) => {
    let data = {
      field: '0/0/1999'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 12/10/-100', (done) => {
    let data = {
      field: '12/10/-100'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 12/32/45', (done) => {
    let data = {
      field: '12/32/45'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid: 20/12/194', (done) => {
    let data = {
      field: '20/12/194'
    };

    expect(DateTime.validate(data, 'field')).to.be.false;
    done();
  });
});
