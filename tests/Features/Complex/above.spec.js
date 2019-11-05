const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: above
 */
describe(chalk.cyan('> Processing: Complex:above feature tests'), () => {
  it(chalk.magenta('Testing passing above validation'), (done) => {
    let data = {
      field: 22
    };

    let result = new Validation(data, {
      field: 'above:1'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing above validation'), (done) => {
    let data = {
      field: 1
    };

    let result = new Validation(data, {
      field: 'above:22'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
