"use strict";
const faker = require("faker");

class DataGenerator {
  /**
   * constructor creates random data using faker library for each run
   */
  constructor() {
    this.departureCity = faker.random.arrayElement([
      "Paris",
      "Philadelphia",
      "Boston",
      "Portland",
      "San Diego",
      "Mexico City",
      "São Paolo",
    ]);
    this.destinationCity = faker.random.arrayElement([
      "Rome",
      "London",
      "Buenos Aires",
      "Berlin",
      "New York",
      "Dublin",
      "Cairo",
    ]);
    this.creditCardType = faker.random.arrayElement([
      "American Express",
      "Visa",
      "Diner's Club",
    ]);
    this.name = faker.name.findName();
    this.address = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.chooseFlight = faker.datatype.number({ min: 1, max: 5 });
    this.creditCardNo = faker.finance.creditCardNumber();
    this.ccMonth = faker.datatype.number({ min: 1, max: 12 });
    this.ccYear = faker.datatype.number({ min: 2023, max: 2034 });
  }
}

module.exports = DataGenerator;
