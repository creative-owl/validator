const Regex = require('../../dist/Rules/Regex');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Regex
 */
describe(chalk.cyan('> Processing: Regex validation tests'), () => {
  it(chalk.magenta('Testing:') + ' valid passing regex', (done) => {
    let data = {
      field: '0810010001'
    };

    expect(Regex.validate(data, 'field', /^0([0-9]{9})$/)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' valid failing regex', (done) => {
    let data = {
      field: '1000000000'
    };

    expect(Regex.validate(data, 'field', /^0([0-9]{9})$/)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' invalid regex', (done) => {
    let data = {
      field: '0810010001'
    };

    try {
      Regex.validate(data, 'field', '/^0([0-9]{9})$/');
    } catch (error) {
      expect(error).to.equal(error);
    }
    done();
  });
});
