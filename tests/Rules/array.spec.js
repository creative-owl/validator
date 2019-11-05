const Arr = require('../../dist/Rules/Array');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Array
 */
describe(chalk.cyan('> Processing: Array validation tests'), () => {
  it(chalk.magenta('Testing:') + ' empty array', (done) => {
    let data = {
      field: []
    };

    expect(Arr.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' flat array', (done) => {
    let data = {
      field: ['test']
    };

    expect(Arr.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' multi-dimensional array', (done) => {
    let data = {
      field: [
        {
          'field': {
            'values': 2
          }
        }
      ]
    };

    expect(Arr.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' object value', (done) => {
    let data = {
      field: {}
    };

    expect(Arr.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string value', (done) => {
    let data = {
      field: 'lol'
    };

    expect(Arr.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' number value', (done) => {
    let data = {
      field: 1.9
    };

    expect(Arr.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean value', (done) => {
    let data = {
      field: false
    };

    expect(Arr.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' null value', (done) => {
    let data = {
      field: null
    };

    expect(Arr.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' empty value', (done) => {
    let data = {
      field: ''
    };

    expect(Arr.validate(data, 'field')).to.be.false;
    done();
  });
});
