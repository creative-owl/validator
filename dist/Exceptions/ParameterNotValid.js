class ParameterNotValidException extends Error {
  /**
   * A custom error for parameters not meeting requirements.
   *
   * @param {String} type
   *
   * @returns {Error}
   */
  constructor(type) {
    super('The given parameter is not a valid ' + type + '!');

    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ParameterNotValidException;
