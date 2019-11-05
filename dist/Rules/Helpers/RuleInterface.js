class RuleInterface {
  /**
   * Constructs the interface.
   *
   * @throws {Error}
   *
   * @returns {void}
   */
  constructor() {
    if (!this.validate) {
      throw new Error('Instance of class must implement interface!');
    }
  }
}

module.exports = RuleInterface;
