const chalk = require('chalk');
const expect = require('chai').expect;
const InArray = require('../../../dist/Rules/Primitives/In');

/**
 * Unit tests: Is in array
 */
describe(chalk.cyan('> Processing: Is in array validation tests'), () => {
  it(chalk.magenta('Testing:') + ' string is in a array of strings', (done) => {
    let data = {
      input: 'test',
    };

    expect(InArray.validate(data, 'input', ['test', 'none'])).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer is in a array of integers', (done) => {
    let data = {
      input: 1,
    };

    expect(InArray.validate(data, 'input', [1, 2])).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' float is in a array of floats', (done) => {
    let data = {
      input: 1.99,
    };

    expect(InArray.validate(data, 'input', [1.99, 2.99])).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean is in a array of booleans', (done) => {
    let data = {
      input: false,
    };

    expect(InArray.validate(data, 'input', [false, true])).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' string is not in a array of strings', (done) => {
    let data = {
      input: 'test',
    };

    expect(InArray.validate(data, 'input', ['null', 'none'])).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer is not in a array of integers', (done) => {
    let data = {
      input: 1,
    };

    expect(InArray.validate(data, 'input', [2, 3])).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float is not in a array of floats', (done) => {
    let data = {
      input: 1.99,
    };

    expect(InArray.validate(data, 'input', [2.99, 3.99])).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean is not in a array of booleans', (done) => {
    let data = {
      input: false,
    };

    expect(InArray.validate(data, 'input', [true, true])).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer is in a array of strings', (done) => {
    let data = {
      input: 1,
    };

    expect(InArray.validate(data, 'input', ['1', '2'])).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float is in a array of strings', (done) => {
    let data = {
      input: 1.99,
    };

    expect(InArray.validate(data, 'input', ['1.99', '2.99'])).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean is not in a array of strings', (done) => {
    let data = {
      input: false,
    };

    expect(InArray.validate(data, 'input', ['false', 'true'])).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' value where check is not an array', (done) => {
    let data = {
      field: 30
    };

    try {
      InArray.validate(data, 'field', 'lol');
    } catch (error) {
      expect(error).to.equal(error);
    }
    done();
  });
  it(chalk.magenta('Testing:') + ' value where check is an empty array', (done) => {
    let data = {
      field: 30
    };

    try {
      InArray.validate(data, 'field', []);
    } catch (error) {
      expect(error).to.equal(error);
    }
    done();
  });
});
