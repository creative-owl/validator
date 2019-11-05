const chalk = require('chalk');
const expect = require('chai').expect;
const Required = require('../../../dist/Rules/Existence/Required');

/**
 * Unit tests: Required validation
 */
describe(chalk.cyan('> Processing: Field required validation tests'), () => {
  it(chalk.magenta('Testing:') + ' key is present value is empty', (done) => {
    let data = {
      field: ''
    };

    expect(Required.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' key is present value is null', (done) => {
    let data = {
      field: null
    };

    expect(Required.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' key is present value is filled', (done) => {
    let data = {
      field: 'test'
    };

    expect(Required.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' key is not present', (done) => {
    let data = {
      other: 'test'
    };

    expect(Required.validate(data, 'field')).to.be.false;
    done();
  });
});
