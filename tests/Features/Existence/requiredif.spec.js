const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../../dist/Validation');

/**
 * Feature tests: existence: required_if
 */
describe(chalk.cyan('> Processing: Existence:required_if feature tests'), () => {
  it(chalk.magenta('Testing passing required if validation (string)'), (done) => {
    let data = {
      field: 'something',
      check: 'test'
    };

    let result = new Validation(data, {
      field: 'required_if:check,test'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing passing required if validation (integer)'), (done) => {
    let data = {
      field: 'something',
      check: 1
    };

    let result = new Validation(data, {
      field: 'required_if:check,1'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing passing required if validation (numeric)'), (done) => {
    let data = {
      field: 'something',
      check: '1'
    };

    let result = new Validation(data, {
      field: 'required_if:check,1'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing passing required if validation (boolean)'), (done) => {
    let data = {
      field: 'something',
      check: true
    };

    let result = new Validation(data, {
      field: 'required_if:check,true'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing passing required if validation (float)'), (done) => {
    let data = {
      field: 'something',
      check: 12.99
    };

    let result = new Validation(data, {
      field: 'required_if:check,12.99'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });
  it(chalk.magenta('Testing failing required if validation (existence)'), (done) => {
    let data = {
      field: null,
      check: 'test'
    };

    let result = new Validation(data, {
      field: 'required_if:check,test'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
  it(chalk.magenta('Testing failing required if validation (type)'), (done) => {
    let data = {
      field: null,
      check: 1
    };

    let result = new Validation(data, {
      field: 'required_if:check,test'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
