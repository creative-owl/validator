const Bool = require('../../dist/Rules/Boolean');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Boolean
 */
describe(chalk.cyan('> Processing: Boolean validation tests'), () => {
  it(chalk.magenta('Testing:') + ' object literal true', (done) => {
    let data = {
      field: true
    };

    expect(Bool.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' object literal false', (done) => {
    let data = {
      field: false
    };

    expect(Bool.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' string value of "true"', (done) => {
    let data = {
      field: 'true'
    };

    expect(Bool.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' string value of "false"', (done) => {
    let data = {
      field: 'false'
    };

    expect(Bool.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' array value', (done) => {
    let data = {
      field: []
    };

    expect(Bool.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' object value', (done) => {
    let data = {
      field: {}
    };

    expect(Bool.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string value', (done) => {
    let data = {
      field: 'lol'
    };

    expect(Bool.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' number value', (done) => {
    let data = {
      field: 1.9
    };

    expect(Bool.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' null value', (done) => {
    let data = {
      field: null
    };

    expect(Bool.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' empty value', (done) => {
    let data = {
      field: ''
    };

    expect(Bool.validate(data, 'field')).to.be.false;
    done();
  });
});
