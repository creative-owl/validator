const chalk = require('chalk');
const expect = require('chai').expect;
const Validation = require('../dist/Validation');

/**
 * Feature tests
 */
require('./Features/simple.spec');
require('./Features/existence.spec');
require('./Features/complex.spec');
