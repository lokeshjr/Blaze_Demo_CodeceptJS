const { I } = inject();

module.exports = {
  /**
   * locators and re-usable methods of Purchase page
   */
  fields: {
    name: { css: "#inputName" },
    address: { css: "#address" },
    city: { css: "#city" },
    state: { css: "#state" },
    zipCode: { css: "#zipCode" },
    creditCardNumber: { css: "#creditCardNumber" },
    ccMonth: { css: "#creditCardMonth" },
    ccYear: { css: "#creditCardYear" },
    nameOnCard: { css: "#nameOnCard" },
  },

  cardTypedropDown: { css: "#cardType" },

  rememberMeChkBox: { css: "#rememberMe" },

  purchaseFlightBtn: { css: "input[type='submit']" },

  /**
   * purchase flight re-usable method
   * @param {*} index
   */
  purchaseFlight(
    name,
    address,
    city,
    state,
    zipCode,
    creditCardType,
    ccNumber,
    ccMonth,
    ccYear
  ) {
    I.fillField(this.fields.name, name);
    I.fillField(this.fields.address, address);
    I.fillField(this.fields.city, city);
    I.fillField(this.fields.state, state);
    I.fillField(this.fields.zipCode, zipCode);
    I.selectOption(this.cardTypedropDown, creditCardType);
    I.fillField(this.fields.creditCardNumber, ccNumber);
    I.fillField(this.fields.ccMonth, ccMonth);
    I.fillField(this.fields.ccYear, ccYear);
    I.fillField(this.fields.nameOnCard, name);
  },

  /**
   * check remember me checkbox
   */

  clickOnRememberMe() {
    I.click(this.rememberMeChkBox);
  },

  /**
   * click on purchase flight
   */
  clickOnPurchaseFlight() {
    I.click(this.purchaseFlightBtn);
  },
};
