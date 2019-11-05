const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: confirmed
 */
describe(chalk.cyan('> Processing: Complex:confirmed feature tests'), () => {
  it(chalk.magenta('Testing passing confirmation validation'), (done) => {
    let data = {
      field: 'secret',
      confirmation: 'secret'
    };

    let result = new Validation(data, {
      field: 'confirmed:confirmation'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing confirmation validation'), (done) => {
    let data = {
      field: 'secret',
      confirmation: 's3cret'
    };

    let result = new Validation(data, {
      field: 'confirmed:confirmation'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
