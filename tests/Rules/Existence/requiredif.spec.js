const chalk = require('chalk');
const expect = require('chai').expect;
const RequiredIf = require('../../../dist/Rules/Existence/RequiredIf');

/**
 * Unit tests: RequiredIf validation
 */
describe(chalk.cyan('> Processing: Field required if another field has a specific value validation tests'), () => {
  it(chalk.magenta('Testing:') + ' if matches, field is populated', (done) => {
    let data = {
      field: 'something',
      check: 'test'
    };

    expect(RequiredIf.validate(data, 'field', 'check', 'test')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' if does not match, field is populated', (done) => {
    let data = {
      field: 'something',
      check: 'test'
    };

    expect(RequiredIf.validate(data, 'field', 'check', 'test1')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' if matches, field is empty', (done) => {
    let data = {
      field: '',
      check: 'test'
    };

    expect(RequiredIf.validate(data, 'field', 'check', 'test')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' if matches, field is null', (done) => {
    let data = {
      field: null,
      check: 'test'
    };

    expect(RequiredIf.validate(data, 'field', 'check', 'test')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' if matches, field is not present', (done) => {
    let data = {
      check: 'test'
    };

    expect(RequiredIf.validate(data, 'field', 'check', 'test')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' if does not match, field is empty', (done) => {
    let data = {
      field: '',
      check: 'test'
    };

    expect(RequiredIf.validate(data, 'field', 'check', 'test1')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' if does not match, field is null', (done) => {
    let data = {
      field: null,
      check: 'test'
    };

    expect(RequiredIf.validate(data, 'field', 'check', 'test1')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' if does not match, field is not present', (done) => {
    let data = {
      check: 'test'
    };

    expect(RequiredIf.validate(data, 'field', 'check', 'test1')).to.be.false;
    done();
  });
});
