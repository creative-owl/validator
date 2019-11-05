const chalk = require('chalk');
const expect = require('chai').expect;
const FieldNotPresentException = require('../dist/Exceptions/FieldNotPresent');
const ParameterNotValidException =
  require('../dist/Exceptions/ParameterNotValid');

/**
 * Exception tests
 */
describe(chalk.cyan('> Processing: Exception tests'), () => {
  it(chalk.magenta('Throwing:') + ' FieldNotPresentException', (done) => {
    expect(() => {
      throw new FieldNotPresentException();
    }).to.throw(`
      The field that you are trying to validate or check against does not exist
       on the request object!
    `);
    done();
  });
  it(chalk.magenta('Throwing:') + ' ParameterNotValidException', (done) => {
    expect(() => {
      throw new ParameterNotValidException('string');
    }).to.throw('The given parameter is not a valid string!');
    done();
  });
});
