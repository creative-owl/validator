const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../../dist/Validation');

/**
 * Feature tests: simple
 */
describe(chalk.cyan('> Processing: Simple feature tests'), () => {
  it(chalk.magenta('Testing passing simple validation'), (done) => {
    let data = {
      array: ['test'],
      bool: true,
      object: { 'field': 'value' },
      alpha: 'all',
      alpha_numeric: 'all69',
      email: 'test@example.com',
      string: '`1234567890-=~!@#$%^&*()_+',
      za_id_number: '8709081065185',
      za_phone_number: '0810010001',
      numeric: '123456',
      integer: 12,
      date: '2019/08/11'
    };

    let result = new Validation(data, {
      array: 'array',
      bool: 'bool',
      object: 'object',
      alpha: 'alpha',
      alpha_numeric: 'alpha_numeric',
      email: 'email',
      string: 'string',
      za_id_number: 'za_id_number',
      za_phone_number: 'za_phone_number',
      numeric: 'numeric',
      integer: 'integer',
      date: 'date'
    });

    expect(result).to.deep.include({ status: 'success' });
    done();
  });

  it(chalk.magenta('Testing failing simple validation'), (done) => {
    let data = {
      array: 'test',
      bool: 'test',
      object: null,
      alpha: false,
      alpha_numeric: false,
      email: 'test@example',
      string: 1,
      za_id_number: '870908106518',
      za_phone_number: '12',
      numeric: 'test',
      integer: 'test',
      date: '2019/08/91'
    };

    let result = new Validation(data, {
      array: 'array',
      bool: 'bool',
      object: 'object',
      alpha: 'alpha',
      alpha_numeric: 'alpha_numeric',
      email: 'email',
      string: 'string',
      za_id_number: 'za_id_number',
      za_phone_number: 'za_phone_number',
      numeric: 'numeric',
      integer: 'integer',
      date: 'date'
    });

    expect(result).to.deep.include({ status: 'failure' });
    done();
  });
});
