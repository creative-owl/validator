const chalk = require('chalk');
const expect = require('chai').expect;
const Optional = require('../../../dist/Rules/Existence/Optional');

/**
 * Unit tests: Optional validation
 */
describe(chalk.cyan('> Processing: Field optional validation tests'), () => {
  it(chalk.magenta('Testing:') + ' key is present value is empty', (done) => {
    let data = {
      field: ''
    };

    expect(Optional.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' key is present value is null', (done) => {
    let data = {
      field: null
    };

    expect(Optional.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' key is present value is filled', (done) => {
    let data = {
      field: 'test'
    };

    expect(Optional.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' key is not present', (done) => {
    let data = {
      other: 'test'
    };

    expect(Optional.validate(data, 'field')).to.be.true;
    done();
  });
});
