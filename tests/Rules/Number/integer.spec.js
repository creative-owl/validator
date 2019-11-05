const chalk = require('chalk');
const expect = require('chai').expect;
const Integer = require('../../../dist/Rules/Number/Integer');

/**
 * Unit tests: Integer
 */
describe(chalk.cyan('> Processing: Integer validation tests'), () => {
  it(chalk.magenta('Testing:') + ' positive float', (done) => {
    let data = {
      field: 22.88
    };

    expect(Integer.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' positive integer', (done) => {
    let data = {
      field: 10
    };

    expect(Integer.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' negative float', (done) => {
    let data = {
      field: -22.88
    };

    expect(Integer.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' negative integer', (done) => {
    let data = {
      field: -10
    };

    expect(Integer.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' string', (done) => {
    let data = {
      field: 'stringy'
    };

    expect(Integer.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string number', (done) => {
    let data = {
      field: '222'
    };

    expect(Integer.validate(data, 'field')).to.be.true;
    done();
  });
});
