const chalk = require('chalk');
const expect = require('chai').expect;
const Confirmed = require('../../../dist/Rules/Primitives/Confirmed');

/**
 * Unit tests: Confirmed fields
 */
describe(chalk.cyan('> Processing: Confirmation validation tests'), () => {
  it(chalk.magenta('Testing:') + ' integer equal to integer', (done) => {
    let data = {
      input: 1,
      confirmation: 1
    };

    expect(Confirmed.validate(data, 'input', 'confirmation')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' float equal to float', (done) => {
    let data = {
      input: 1.99,
      confirmation: 1.99
    };

    expect(Confirmed.validate(data, 'input', 'confirmation')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' string equal to string', (done) => {
    let data = {
      input: 'test',
      confirmation: 'test'
    };

    expect(Confirmed.validate(data, 'input', 'confirmation')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer not equal to integer', (done) => {
    let data = {
      input: 1,
      confirmation: 2
    };

    expect(Confirmed.validate(data, 'input', 'confirmation')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float not equal to float', (done) => {
    let data = {
      input: 1.99,
      confirmation: 1.9
    };

    expect(Confirmed.validate(data, 'input', 'confirmation')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string not equal to string', (done) => {
    let data = {
      input: 'test',
      confirmation: '123'
    };

    expect(Confirmed.validate(data, 'input', 'confirmation')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' string not equal to integer', (done) => {
    let data = {
      input: 'test',
      confirmation: 1
    };

    expect(Confirmed.validate(data, 'input', 'confirmation')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string not equal to float', (done) => {
    let data = {
      input: 'test',
      confirmation: 1.99
    };

    expect(Confirmed.validate(data, 'input', 'confirmation')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer not equal to float', (done) => {
    let data = {
      input: 1,
      confirmation: 1.99
    };

    expect(Confirmed.validate(data, 'input', 'confirmation')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' no check field present', (done) => {
    let data = {
      field: 30
    };

    try {
      Confirmed.validate(data, 'field');
    } catch (error) {
      expect(error).to.equal(error);
    }
    done();
  });
});
