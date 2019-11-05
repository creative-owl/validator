const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: equals
 */
describe(chalk.cyan('> Processing: Complex:equals feature tests'), () => {
  it(chalk.magenta('Testing passing equals validation'), (done) => {
    let data = {
      field: 'secret'
    };

    let result = new Validation(data, {
      field: 'equals:secret'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing equals validation'), (done) => {
    let data = {
      field: 'secret'
    };

    let result = new Validation(data, {
      field: 'equals:confirmation'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
