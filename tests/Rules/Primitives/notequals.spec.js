const chalk = require('chalk');
const expect = require('chai').expect;
const Equals = require('../../../dist/Rules/Primitives/Equals');

/**
 * Unit tests: equals comparison
 */
describe(chalk.cyan('> Processing: Strict equal validation tests'), () => {
  it(chalk.magenta('Testing:') + ' integer equal to integer', (done) => {
    let data = {
      input: 1
    };

    expect(Equals.validate(data, 'input', 1)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' float equal to float', (done) => {
    let data = {
      input: 1.99
    };

    expect(Equals.validate(data, 'input', 1.99)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' string equal to string', (done) => {
    let data = {
      input: 'test'
    };

    expect(Equals.validate(data, 'input', 'test')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer not equal to integer', (done) => {
    let data = {
      input: 1
    };

    expect(Equals.validate(data, 'input', 2)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float not equal to float', (done) => {
    let data = {
      input: 1.99
    };

    expect(Equals.validate(data, 'input', 1.9)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string not equal to string', (done) => {
    let data = {
      input: 'test'
    };

    expect(Equals.validate(data, 'input', '123')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' string not equal to integer', (done) => {
    let data = {
      input: 'test'
    };

    expect(Equals.validate(data, 'input', 1)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string not equal to float', (done) => {
    let data = {
      input: 'test'
    };

    expect(Equals.validate(data, 'input', 1.99)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer not equal to float', (done) => {
    let data = {
      input: 1
    };

    expect(Equals.validate(data, 'input', 1.99)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' no check field present', (done) => {
    let data = {
      field: 30
    };

    try {
      Equals.validate(data, 'field');
    } catch (error) {
      expect(error).to.equal(error);
    }
    done();
  });
});
