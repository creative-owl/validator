class FieldNotPresentException extends Error {
  /**
   * A custom error for fields not being present for validation.
   *
   * @returns {Error}
   */
  constructor() {
    super(`
      The field that you are trying to validate or check against does not exist
       on the request object!
    `);

    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = FieldNotPresentException;
