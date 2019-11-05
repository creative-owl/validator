const Str = require('../../../dist/Rules/String/String');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: String
 */
describe(chalk.cyan('> Processing: String validation tests'), () => {
  it(chalk.magenta('Testing:') + ' all possible string values', (done) => {
    let data = {
      field: '`1234567890-=~!@#$%^&*()_+QWERTYUIOP{}|qwertyuiop[]ASDFGHJKL:"asdfghjkl;\'ZXCVBNM<>?zxcvbnm,./\\'
    };

    expect(Str.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer', (done) => {
    let data = {
      field: 1
    };

    expect(Str.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float', (done) => {
    let data = {
      field: 1.99
    };

    expect(Str.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean', (done) => {
    let data = {
      field: false
    };

    expect(Str.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' array', (done) => {
    let data = {
      field: []
    };

    expect(Str.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' object', (done) => {
    let data = {
      field: {}
    };

    expect(Str.validate(data, 'field')).to.be.false;
    done();
  });
});
