const chalk = require('chalk');
const expect = require('chai').expect;
const Filled = require('../../../dist/Rules/Existence/Filled');

/**
 * Unit tests: Filled validation
 */
describe(chalk.cyan('> Processing: Field filled validation tests'), () => {
  it(chalk.magenta('Testing:') + ' key is present value is empty', (done) => {
    let data = {
      field: ''
    };

    expect(Filled.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' key is present value is null', (done) => {
    let data = {
      field: null
    };

    expect(Filled.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' key is present value is filled', (done) => {
    let data = {
      field: 'test'
    };

    expect(Filled.validate(data, 'field')).to.be.false;
    done();
  });
});
