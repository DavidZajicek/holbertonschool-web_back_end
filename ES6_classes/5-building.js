export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (
      this.evacuationWarningMessage ===
      Building.prototype.evacuationWarningMessage
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  /**
   *
   */
  evacuationWarningMessage() {}
}
