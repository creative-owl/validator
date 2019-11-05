const Value = require('../dist/Rules/Helpers/GetValue');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests
 */
describe(chalk.cyan('> Processing: General unit tests'), () => {
  it(chalk.magenta('Testing:') + ' getting a value that does not exist', (done) => {
    try {
      Value.get({ field: 'value' }, 'otherField');
    } catch (error) {
      expect(error).to.equal(error);
    };
    done();
  });
});
