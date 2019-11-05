const Above = require('../../../dist/Rules/Number/Above');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Above a value
 */
describe(chalk.cyan('> Processing: Above numeric value validation tests'), () => {
  it(chalk.magenta('Testing:') + ' float value above integer', (done) => {
    let data = {
      field: 22.88
    };

    expect(Above.validate(data, 'field', 22)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value above float', (done) => {
    let data = {
      field: 22.88
    };

    expect(Above.validate(data, 'field', 22.5)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value above float', (done) => {
    let data = {
      field: 23
    };

    expect(Above.validate(data, 'field', 22.5)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value above integer', (done) => {
    let data = {
      field: 24
    };

    expect(Above.validate(data, 'field', 22)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value below integer', (done) => {
    let data = {
      field: 20
    };

    expect(Above.validate(data, 'field', 22)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value below float', (done) => {
    let data = {
      field: 20
    };

    expect(Above.validate(data, 'field', 22.5)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value below float', (done) => {
    let data = {
      field: 20
    };

    expect(Above.validate(data, 'field', 22.5)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value below integer', (done) => {
    let data = {
      field: 20
    };

    expect(Above.validate(data, 'field', 22)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string', (done) => {
    let data = {
      field: 'stringy'
    };

    expect(Above.validate(data, 'field', 22)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string number', (done) => {
    let data = {
      field: '222'
    };

    expect(Above.validate(data, 'field', 221)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string value for above', (done) => {
    let data = {
      field: 35
    };

    try {
      Above.validate(data, 'field', '33');
    } catch (error) {
      expect(error).to.equal(error);
    }
    done();
  });
});
