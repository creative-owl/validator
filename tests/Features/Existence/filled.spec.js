const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: existence: filled
 */
describe(chalk.cyan('> Processing: Existence:filled feature tests'), () => {
  it(chalk.magenta('Testing passing filled validation'), (done) => {
    let data = {
      name: '',
      surname: 'saayman'
    };

    let result = new Validation(data, {
      name: 'filled|integer',
      surname: 'filled|string'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing filled validation'), (done) => {
    let data = {
      field: 'test'
    };

    let result = new Validation(data, {
      field: 'filled|integer',
      name: 'filled'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
