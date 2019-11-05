const Under = require('../../../dist/Rules/Number/Under');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Under a value
 */
describe(chalk.cyan('> Processing: Under numeric value validation tests'), () => {
  it(chalk.magenta('Testing:') + ' float value under integer', (done) => {
    let data = {
      field: 20.19
    };

    expect(Under.validate(data, 'field', 22)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value under float', (done) => {
    let data = {
      field: 22.1
    };

    expect(Under.validate(data, 'field', 22.5)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value under float', (done) => {
    let data = {
      field: 21
    };

    expect(Under.validate(data, 'field', 22.5)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value under integer', (done) => {
    let data = {
      field: 20
    };

    expect(Under.validate(data, 'field', 22)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value above integer', (done) => {
    let data = {
      field: 23
    };

    expect(Under.validate(data, 'field', 22)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value above float', (done) => {
    let data = {
      field: 23.3
    };

    expect(Under.validate(data, 'field', 22.5)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value above float', (done) => {
    let data = {
      field: 25
    };

    expect(Under.validate(data, 'field', 22.5)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value above integer', (done) => {
    let data = {
      field: 25
    };

    expect(Under.validate(data, 'field', 22)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string', (done) => {
    let data = {
      field: 'stringy'
    };

    expect(Under.validate(data, 'field', 22)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string number', (done) => {
    let data = {
      field: '222'
    };

    expect(Under.validate(data, 'field', 221)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string value for under', (done) => {
    let data = {
      field: 30
    };

    try {
      Under.validate(data, 'field', '33');
    } catch (error) {
      expect(error).to.equal(error);
    }
    done();
  });
});
