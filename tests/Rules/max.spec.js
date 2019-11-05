const Max = require('../../dist/Rules/Max');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Max length
 */
describe(chalk.cyan('> Processing: Max length validation tests'), () => {
  it(chalk.magenta('Testing:') + ' array length of 1 expecting 1', (done) => {
    let data = {
      field: ['test']
    };

    expect(Max.validate(data, 'field', 1)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' array length of 2 expecting 2', (done) => {
    let data = {
      field: ['test', 'test']
    };

    expect(Max.validate(data, 'field', 2)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' array length of 2 expecting 1', (done) => {
    let data = {
      field: ['test', 'test']
    };

    expect(Max.validate(data, 'field', 1)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' array containing an object with a length of 3 expecting 3', (done) => {
    let data = {
      field: ['test', 'test', {
        'field': 1
      }]
    };

    expect(Max.validate(data, 'field', 3)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' string length of 5 expecting 5', (done) => {
    let data = {
      field: 'hello'
    };

    expect(Max.validate(data, 'field', 5)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' string length of 7 expecting 5', (done) => {
    let data = {
      field: 'goodbye'
    };

    expect(Max.validate(data, 'field', 5)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string length of 7 omitting max length', (done) => {
    let data = {
      field: 'goodbye'
    };

    try {
      Max.validate(data, 'field');
    } catch (error) {
      expect(error).to.equal(error);
    }
    done();
  });
  it(chalk.magenta('Testing:') + ' object value', (done) => {
    let data = {
      field: {}
    };

    expect(Max.validate(data, 'field', 1)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' number value', (done) => {
    let data = {
      field: 1.1345
    };

    expect(Max.validate(data, 'field', 1)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean value', (done) => {
    let data = {
      field: true
    };

    expect(Max.validate(data, 'field', 4)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' null value', (done) => {
    let data = {
      field: null
    };

    expect(Max.validate(data, 'field', 1)).to.be.false;
    done();
  });
});
