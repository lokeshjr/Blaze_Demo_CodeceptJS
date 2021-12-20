const { I } = inject();

module.exports = {
  /**
   * locators and re-usable methods of Reservation page
   */
  text: {
    welcomeText: { css: "h3" },
    departureCityText: { xpath: "//tr/th[4]" },
    destinationCityText: { xpath: "//tr/th[5]" },
  },

  /**
   * click on random choose this flight button
   * @param {*} index
   */
  chooseThisFlight(index) {
    I.seeElement(this.text.welcomeText);
    I.seeElement(this.text.departureCityText);
    I.seeElement(this.text.destinationCityText);
    I.click(`(//input[@type='submit'])[${index}]`);
  },
};
