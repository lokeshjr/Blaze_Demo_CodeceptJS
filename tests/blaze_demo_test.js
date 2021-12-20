const travelTheWorldPage = require("../pages/TravelTheWorldPage"); //to access travel the world page objects
const reservationPage = require("../pages/ReservationPage"); // to access reservation page objects
const purchasePage = require("../pages/PurchasePage"); // to access purchase page objects
const confirmationPage = require("../pages/ConfirmationPage"); // to access confirmation page objects
const assert = require("assert"); //to access assert library
const DataGenerator = require("../data/DataGenerator");

Feature("Blaze Demo - Flight Booking test");

Scenario("Verify flight booking functionality", async ({ I }) => {
  let userData = new DataGenerator();
  I.amOnPage("/");
  travelTheWorldPage.selectFlights(
    userData.departureCity,
    userData.destinationCity
  );
  travelTheWorldPage.clickOnFindFlights();
  reservationPage.chooseThisFlight(userData.chooseFlight);
  purchasePage.purchaseFlight(
    userData.name,
    userData.address,
    userData.city,
    userData.state,
    userData.zipCode,
    userData.creditCardType,
    userData.creditCardNo,
    userData.ccMonth,
    userData.ccYear
  );
  purchasePage.clickOnPurchaseFlight();
  await confirmationPage.verifyBookingDetails();
})
  .tag("@sanity")
  .tag("@positive");

Scenario(
  "Verify flight booking functionality with remember me option",
  async ({ I }) => {
    let userData = new DataGenerator();
    I.amOnPage("/");
    travelTheWorldPage.selectFlights(
      userData.departureCity,
      userData.destinationCity
    );
    travelTheWorldPage.clickOnFindFlights();
    reservationPage.chooseThisFlight(userData.chooseFlight);
    purchasePage.purchaseFlight(
      userData.name,
      userData.address,
      userData.city,
      userData.state,
      userData.zipCode,
      userData.creditCardType,
      userData.creditCardNo,
      userData.ccMonth,
      userData.ccYear
    );
    purchasePage.clickOnRememberMe();
    purchasePage.clickOnPurchaseFlight();
    await confirmationPage.verifyBookingDetails();
  }
)
  .tag("@sanity")
  .tag("@positive");

Scenario(
  "Verify flight booking functionality with out entering user details",
  async ({ I }) => {
    let userData = new DataGenerator();
    I.amOnPage("/");
    travelTheWorldPage.selectFlights(
      userData.departureCity,
      userData.destinationCity
    );
    travelTheWorldPage.clickOnFindFlights();
    reservationPage.chooseThisFlight(userData.chooseFlight);
    purchasePage.clickOnPurchaseFlight();
    await confirmationPage.verifyBookingDetails();
  }
)
  .tag("@sanity")
  .tag("@positive");
