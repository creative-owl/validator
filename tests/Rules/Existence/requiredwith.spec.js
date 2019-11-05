const chalk = require('chalk');
const expect = require('chai').expect;
const RequiredWith = require('../../../dist/Rules/Existence/RequiredWith');

/**
 * Unit tests: RequiredWith validation
 */
describe(chalk.cyan('> Processing: Field required if another field is present validation tests'), () => {
  it(chalk.magenta('Testing:') + ' required field is empty check field is present', (done) => {
    let data = {
      field: '',
      check: 'test'
    };

    expect(RequiredWith.validate(data, 'field', 'check')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' required field is null check field is present', (done) => {
    let data = {
      field: null,
      check: 'test'
    };

    expect(RequiredWith.validate(data, 'field', 'check')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' required field is not present check field is present', (done) => {
    let data = {
      check: 'test'
    };

    expect(RequiredWith.validate(data, 'field', 'check')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' required field is present check field is empty', (done) => {
    let data = {
      field: 'test',
      check: ''
    };

    expect(RequiredWith.validate(data, 'field', 'check')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' required field is present check field is null', (done) => {
    let data = {
      field: 'test',
      check: null
    };

    expect(RequiredWith.validate(data, 'field', 'check')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' required field present check field is not present', (done) => {
    let data = {
      field: 'test'
    };

    expect(RequiredWith.validate(data, 'field', 'check')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' required field present check field is present', (done) => {
    let data = {
      field: 'test',
      check: 'test'
    };

    expect(RequiredWith.validate(data, 'field', 'check')).to.be.true;
    done();
  });
});
