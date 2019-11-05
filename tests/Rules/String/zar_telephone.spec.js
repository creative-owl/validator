const chalk = require('chalk');
const expect = require('chai').expect;
const ZARTelNumber = require('../../../dist/Rules/String/ZARTelephoneNumber');

/**
 * Unit tests: ZAR telephone number
 */
describe(chalk.cyan('> Processing: ZAR telephone number validation tests'), () => {
  it(chalk.magenta('Testing:') + ' valid telephone number', (done) => {
    let data = {
      field: '0810010001'
    };

    expect(ZARTelNumber.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' 11 number telephone number', (done) => {
    let data = {
      field: '08100100011'
    };

    expect(ZARTelNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' 9 number telephone number', (done) => {
    let data = {
      field: '081001000'
    };

    expect(ZARTelNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid telephone number', (done) => {
    let data = {
      field: '1810010001'
    };

    expect(ZARTelNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer', (done) => {
    let data = {
      field: 1
    };

    expect(ZARTelNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float', (done) => {
    let data = {
      field: 1.99
    };

    expect(ZARTelNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean', (done) => {
    let data = {
      field: false
    };

    expect(ZARTelNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' array', (done) => {
    let data = {
      field: []
    };

    expect(ZARTelNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' object', (done) => {
    let data = {
      field: {}
    };

    expect(ZARTelNumber.validate(data, 'field')).to.be.false;
    done();
  });
});
