const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: existence: optional
 */
describe(chalk.cyan('> Processing: Existence:optional feature tests'), () => {
  it(chalk.magenta('Testing passing optional validation'), (done) => {
    let data = {
      name: '',
      surname: 'saayman'
    };

    let result = new Validation(data, {
      name: 'optional|integer',
      surname: 'optional|string',
      field: 'optional|string'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });

  it(chalk.magenta('Testing failing optional validation'), (done) => {
    let data = {
      field: 'test'
    };

    let result = new Validation(data, {
      field: 'optional|integer'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
