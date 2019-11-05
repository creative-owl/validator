const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: complex: regex
 */
describe(chalk.cyan('> Processing: Complex:regex feature tests'), () => {
  it(chalk.magenta('Testing passing regex validation'), (done) => {
    let data = {
      field: '0810010001'
    };

    let result = new Validation(data, {
      field: 'regex:^0([0-9]{9})$'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing regex validation'), (done) => {
    let data = {
      field: '1000000000'
    };

    let result = new Validation(data, {
      field: 'regex:^0([0-9]{9})$'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
