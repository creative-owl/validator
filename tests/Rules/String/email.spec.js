const Email = require('../../../dist/Rules/String/Email');
const chalk = require('chalk');
const expect = require('chai').expect;

/**
 * Unit tests: Email
 */
describe(chalk.cyan('> Processing: Email validation tests'), () => {
  it(chalk.magenta('Testing:') + ' all possible string values', (done) => {
    let data = {
      field: '`1234567890-=~!@#$%^&*()_+QWERTYUIOP{}|qwertyuiop[]ASDFGHJKL:"asdfghjkl;\'ZXCVBNM<>?zxcvbnm,./\\'
    };

    expect(Email.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' string with numbers', (done) => {
    let data = {
      field: '09Test'
    };

    expect(Email.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' only alphabetic string', (done) => {
    let data = {
      field: 'thistest'
    };

    expect(Email.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' integer', (done) => {
    let data = {
      field: 1
    };

    expect(Email.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' float', (done) => {
    let data = {
      field: 1.99
    };

    expect(Email.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' boolean', (done) => {
    let data = {
      field: false
    };

    expect(Email.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' array', (done) => {
    let data = {
      field: []
    };

    expect(Email.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' object', (done) => {
    let data = {
      field: {}
    };

    expect(Email.validate(data, 'field')).to.be.false;
    done();
  });

  it(chalk.magenta('Testing:') + ' well formed .com email address', (done) => {
    let data = {
      field: 'test@test.com'
    };

    expect(Email.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' well formed .co.za email address', (done) => {
    let data = {
      field: 'test@test.co.za'
    };

    expect(Email.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' well formed .io email address', (done) => {
    let data = {
      field: 'test@test.io'
    };

    expect(Email.validate(data, 'field')).to.be.true;
    done();
  });
  it(chalk.magenta('Testing:') + ' malformed double @ email address', (done) => {
    let data = {
      field: 't@est@test.io'
    };

    expect(Email.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' malformed no extension email address', (done) => {
    let data = {
      field: 'test@test'
    };

    expect(Email.validate(data, 'field')).to.be.false;
    done();
  });
  it(chalk.magenta('Testing:') + ' well formed with + email address', (done) => {
    let data = {
      field: 'test+123@test.com'
    };

    expect(Email.validate(data, 'field')).to.be.true;
    done();
  });
});
