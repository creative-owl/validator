const Alpha = require('../../../dist/Rules/String/Alpha');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Alphabetic characters only
 */
describe(chalk.cyan('> Processing: Alphabetic characters only validation tests'), () => {
  it(chalk.magenta('Testing:') + ' all possible string values', (done) => {
    let data = {
      field: '`1234567890-=~!@#$%^&*()_+QWERTYUIOP{}|qwertyuiop[]ASDFGHJKL:"asdfghjkl;\'ZXCVBNM<>?zxcvbnm,./\\'
    };

    expect(Alpha.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string with numbers', (done) => {
    let data = {
      field: '09Test'
    };

    expect(Alpha.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' only alphabetic string', (done) => {
    let data = {
      field: 'thistest'
    };

    expect(Alpha.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer', (done) => {
    let data = {
      field: 1
    };

    expect(Alpha.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float', (done) => {
    let data = {
      field: 1.99
    };

    expect(Alpha.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean', (done) => {
    let data = {
      field: false
    };

    expect(Alpha.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' array', (done) => {
    let data = {
      field: []
    };

    expect(Alpha.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' object', (done) => {
    let data = {
      field: {}
    };

    expect(Alpha.validate(data, 'field')).to.be.false;
    done();
  });
});
