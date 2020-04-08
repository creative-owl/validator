class RuleInterface {
  /**
   * Constructs the interface.
   *
   * @throws {Error}
   *
   * @returns {Self}
   */
  constructor() {
    if (!this.validate) {
      throw new Error('Instance of class must implement interface!');
    }
  }
}

module.exports = RuleInterface;
