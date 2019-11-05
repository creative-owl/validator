const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: min
 */
describe(chalk.cyan('> Processing: Complex:min feature tests'), () => {
  it(chalk.magenta('Testing passing min validation'), (done) => {
    let data = {
      field: 'something',
    };

    let result = new Validation(data, {
      field: 'min:2'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing min validation'), (done) => {
    let data = {
      field: 'something',
    };

    let result = new Validation(data, {
      field: 'min:20'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
