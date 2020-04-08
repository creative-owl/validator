const Months = require('./MonthsList');

class FormatEnforcer {
  /**
   * Evaluates a date value and determines if it matches the given
   * format string.
   *
   * @param {String} value
   * @param {String} format
   *
   * @returns {Boolean}
   */
  validate(value, format) {
    let delimiter = this.determineDelimiter(format);

    if (delimiter !== this.determineDelimiter(value)) {
      return false;
    }

    return this.isFormatAdheredTo(
      value.split(delimiter),
      format.split(delimiter)
    );
  }

  /**
   * Determines if the format given has been adhered to.
   *
   * @param {Array<string>} values
   * @param {Array<string>} formats
   *
   * @returns {Boolean}
   */
  isFormatAdheredTo(values, formats) {
    let validations = [];

    if (values.length !== formats.length) {
      return false;
    }

    this.setupData(values, formats);

    validations.push(this.isDayValid());
    validations.push(this.isMonthValid());
    validations.push(this.isYearValid());

    if (validations.includes(false)) {
      return false;
    }

    return true;
  }

  /**
   * Determines if the day given is valid.
   *
   * @returns {Boolean}
   */
  isDayValid() {
    if (this.values.text.day.length !== this.formats.day.length) {
      return false;
    }

    if (
      this.values.int.day <= this.determineDays(
        this.values.int.month, this.values.int.year
      ) &&
      this.values.int.day !== 0
    ) {
      return true;
    }

    return false;
  }

  /**
   * Determines if the month given is valid.
   *
   * @returns {Boolean}
   */
  isMonthValid() {
    if (this.values.text.month.length !== this.formats.month.length) {
      return false;
    }

    if (this.values.int.month <= 12 && this.values.int.month !== 0) {
      return true;
    }

    return false;
  }

  /**
   * Determines if the year given is valid.
   *
   * @returns {Boolean}
   */
  isYearValid() {
    if (this.values.text.year.length !== this.formats.year.length) {
      return false;
    }

    return true;
  }

  /**
   * Sets up all data necessary to be able to work out date validity.
   *
   * @param {Array<string>} values
   * @param {Array<string>} formats
   *
   * @returns {Void}
   */
  setupData(values, formats) {
    this.formats = {
      day: formats.find(this.findDay),
      month: formats.find(this.findMonth),
      year: formats.find(this.findYear)
    };
    this.indicies = {
      formats: {
        day: formats.indexOf(this.formats.day),
        month: formats.indexOf(this.formats.month),
        year: formats.indexOf(this.formats.year)
      },
      values: {
        day: formats.indexOf(this.formats.day),
        month: formats.indexOf(this.formats.month),
        year: formats.indexOf(this.formats.year)
      }
    };
    this.values = {
      int: {
        day: parseInt(values[this.indicies.values.day], 10),
        month: parseInt(values[this.indicies.values.month], 10),
        year: parseInt(values[this.indicies.values.year], 10)
      },
      text: {
        day: values[this.indicies.values.day],
        month: values[this.indicies.values.month],
        year: values[this.indicies.values.year]
      }
    };
  }

  /**
   * Determine the amount of allowable days in a month.
   *
   * @param {Number} month
   * @param {Number} year
   *
   * @returns {Number}
   */
  determineDays(month, year) {
    if (month === 2 && Number.isInteger(year / 4)) {
      return 29;
    }

    return Months[month];
  }

  /**
   * Finds the day.
   *
   * @param {String} value
   *
   * @returns {Boolean}
   */
  findDay(value) {
    return value.includes('D');
  }

  /**
   * Finds the month.
   *
   * @param {String} value
   *
   * @returns {Boolean}
   */
  findMonth(value) {
    return value.includes('M');
  }

  /**
   * Finds the year.
   *
   * @param {String} value
   *
   * @returns {Boolean}
   */
  findYear(value) {
    return value.includes('Y');
  }

  /**
   * Determines the delimiter used.
   *
   * @param {String} value
   *
   * @returns {String | Boolean}
   */
  determineDelimiter(value) {
    if (value.split('/').length > 1) {
      return '/';
    }
    if (value.split('.').length > 1) {
      return '.';
    }
    if (value.split('-').length > 1) {
      return '-';
    }

    return false;
  }
}

module.exports = FormatEnforcer;
