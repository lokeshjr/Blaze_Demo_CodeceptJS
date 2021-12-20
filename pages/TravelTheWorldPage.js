const { I } = inject();

module.exports = {
  /**
   * locators and re-usable methods of Travel the world page
   */
  dropDown: {
    departureCity: { css: "select[name='fromPort']" },
    destinationCity: { css: "select[name='toPort']" },
  },
  findflights: { css: "input[type='submit']" },

  welcomeText: { css: "h1" },

  /**
   * select Flights with values
   * @param {*} depCity
   * @param {*} desCity
   */
  selectFlights(depCity, desCity) {
    I.seeElement(this.welcomeText);
    I.selectOption(this.dropDown.departureCity, depCity);
    I.selectOption(this.dropDown.destinationCity, desCity);
  },
  /**
   * click on find flights button
   */
  clickOnFindFlights() {
    I.click(this.findflights);
  },
};
