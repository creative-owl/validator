const Range = require('../../../dist/Rules/Number/Range');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Range of values
 */
describe(chalk.cyan('> Processing: Range validation tests'), () => {
  it(chalk.magenta('Testing:') + ' integer value within integer range', (done) => {
    let data = {
      field: 22
    };

    expect(Range.validate(data, 'field', 21, 23)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value within float range', (done) => {
    let data = {
      field: 22
    };

    expect(Range.validate(data, 'field', 21.5, 22.5)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value within integer range', (done) => {
    let data = {
      field: 22.5
    };

    expect(Range.validate(data, 'field', 21, 23)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value within float range', (done) => {
    let data = {
      field: 22.4
    };

    expect(Range.validate(data, 'field', 21.5, 22.5)).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value below integer range', (done) => {
    let data = {
      field: 20
    };

    expect(Range.validate(data, 'field', 21, 23)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value below float range', (done) => {
    let data = {
      field: 20
    };

    expect(Range.validate(data, 'field', 21.5, 22.5)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value below integer range', (done) => {
    let data = {
      field: 20.5
    };

    expect(Range.validate(data, 'field', 21, 23)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value below float range', (done) => {
    let data = {
      field: 20.4
    };

    expect(Range.validate(data, 'field', 21.5, 22.5)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value above integer range', (done) => {
    let data = {
      field: 25
    };

    expect(Range.validate(data, 'field', 21, 23)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer value above float range', (done) => {
    let data = {
      field: 25
    };

    expect(Range.validate(data, 'field', 21.5, 22.5)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value above integer range', (done) => {
    let data = {
      field: 25.5
    };

    expect(Range.validate(data, 'field', 21, 23)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float value above float range', (done) => {
    let data = {
      field: 25.4
    };

    expect(Range.validate(data, 'field', 21.5, 22.5)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string', (done) => {
    let data = {
      field: 'stringy'
    };

    expect(Range.validate(data, 'field', 22, 23)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string number', (done) => {
    let data = {
      field: '222'
    };

    expect(Range.validate(data, 'field', 221, 222)).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string value for under', (done) => {
    let data = {
      field: 30
    };

    try {
      Range.validate(data, 'field', '33', '39');
    } catch (error) {
      expect(error).to.equal(error);
    }
    done();
  });
});
