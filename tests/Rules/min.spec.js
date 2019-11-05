const Min = require('../../dist/Rules/Min');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Min length
 */
describe(chalk.cyan('> Processing: Min length validation tests'), () => {
  it(chalk.magenta('Testing:') + ' array length of 2 expecting 1 or more', (done) => {
    let data = {
      field: ['test', 'test']
    };

    expect(Min.validate(data, 'field', 1)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' array length of 3 expecting 2 or more', (done) => {
    let data = {
      field: ['test', 'test', 3]
    };

    expect(Min.validate(data, 'field', 2)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' array length of 0 expecting 1 or more', (done) => {
    let data = {
      field: []
    };

    expect(Min.validate(data, 'field', 1)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' array containing an object with a length of 3 expecting 3 or more',
    (done) => {
      let data = {
        field: ['test', 'test', {
          'field': 1
        }]
      };

      expect(Min.validate(data, 'field', 3)).to.be.true;
      done();
    });
  it(chalk.magenta('Testing:') + ' string length of 6 expecting 5 or more', (done) => {
    let data = {
      field: 'mister'
    };

    expect(Min.validate(data, 'field', 5)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' string length of 5 expecting 7 or more', (done) => {
    let data = {
      field: 'hello'
    };

    expect(Min.validate(data, 'field', 7)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string length of 7 omitting min length', (done) => {
    let data = {
      field: 'goodbye'
    };

    try {
      Min.validate(data, 'field');
    } catch (error) {
      expect(error).to.equal(error);
    }
    done();
  });
  it(chalk.magenta('Testing:') + ' object value', (done) => {
    let data = {
      field: {}
    };

    expect(Min.validate(data, 'field', 1)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' number value', (done) => {
    let data = {
      field: 1.1345
    };

    expect(Min.validate(data, 'field', 1)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean value', (done) => {
    let data = {
      field: true
    };

    expect(Min.validate(data, 'field', 4)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' null value', (done) => {
    let data = {
      field: null
    };

    expect(Min.validate(data, 'field', 1)).to.be.false;
    done();
  });
});
