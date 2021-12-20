const { I } = inject();

const assert = require("assert");

module.exports = {
  /**
   * locators and re-usable methods of Confirmation page
   */
  text: {
    thankYou: { css: "h1" },
    id: { xpath: "(//tbody/tr/td)[2]" },
  },

  bookingJsonObject: { xpath: "//pre" },

  /**
   * verify booking information
   * @param {*} index
   */

  async verifyBookingDetails() {
    let bookingId = await I.grabTextFrom(this.text.id);
    let jsonBookingId = await I.grabTextFrom(this.bookingJsonObject);
    bookingDetails = JSON.parse(jsonBookingId);
    assert.equal(bookingId, bookingDetails.id);
  },
};
