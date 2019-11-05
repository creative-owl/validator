const chalk = require('chalk');
const expect = require('chai').expect;
const ZARIDNumber = require('../../../dist/Rules/String/ZARIdentityNumber');

/**
 * Unit tests: ID number
 */
describe(chalk.cyan('> Processing: ID number validation tests'), () => {
  it(chalk.magenta('Testing:') + ' valid standard ID number', (done) => {
    let data = {
      field: '8709223322189'
    };

    expect(ZARIDNumber.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' valid year 2000 ID number', (done) => {
    let data = {
      field: '0010134688182'
    };

    expect(ZARIDNumber.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid ID number that is too short', (done) => {
    let data = {
      field: '860908371118'
    };

    expect(ZARIDNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid ID number that is invalid', (done) => {
    let data = {
      field: '8609084711184'
    };

    expect(ZARIDNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid ID number with alpha characters', (done) => {
    let data = {
      field: '8609084s11184'
    };

    expect(ZARIDNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer', (done) => {
    let data = {
      field: 1
    };

    expect(ZARIDNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float', (done) => {
    let data = {
      field: 1.99
    };

    expect(ZARIDNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean', (done) => {
    let data = {
      field: false
    };

    expect(ZARIDNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' array', (done) => {
    let data = {
      field: []
    };

    expect(ZARIDNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' object', (done) => {
    let data = {
      field: {}
    };

    expect(ZARIDNumber.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' only zeros ID number', (done) => {
    let data = {
      field: '0000000000000'
    };

    expect(ZARIDNumber.validate(data, 'field')).to.be.false;
    done();
  });
});
