const Obj = require('../../dist/Rules/Object');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Object
 */
describe(chalk.cyan('> Processing: Object validation tests'), () => {
  it(chalk.magenta('Testing:') + ' empty object', (done) => {
    let data = {
      field: {}
    };

    expect(Obj.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' flat object', (done) => {
    let data = {
      field: {
        field_one: 'test'
      }
    };

    expect(Obj.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' object containing an array', (done) => {
    let data = {
      field: {
        field_one: 'test',
        field_two: ['test']
      }
    };

    expect(Obj.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' multi-dimensional object', (done) => {
    let data = {
      field: {
        field_one: 'test',
        object_one: {
          field_two: 2
        }
      }
    };

    expect(Obj.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' array value', (done) => {
    let data = {
      field: []
    };

    expect(Obj.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' numeric value', (done) => {
    let data = {
      field: 1.1
    };

    expect(Obj.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean value', (done) => {
    let data = {
      field: true
    };

    expect(Obj.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string value', (done) => {
    let data = {
      field: 'string'
    };

    expect(Obj.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' null value', (done) => {
    let data = {
      field: null
    };

    expect(Obj.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' empty value', (done) => {
    let data = {
      field: ''
    };

    expect(Obj.validate(data, 'field')).to.be.false;
    done();
  });
});
