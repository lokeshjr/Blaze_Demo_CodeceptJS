const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "https://blazedemo.com/index.php",
      browser: "chrome",
      windowSize: "maximize",
      smartWait: 5000,
      waitForTimeout: 50000,
      timeouts: {
        implicit: 50000,
        pageLoad: 50000,
        "page load": 50000,
      },
    },
  },
  multiple: {
    parallel: {
      // Splits tests into 2 chunks
      chunks: 2,
      browsers: ["chrome", "firefox"],
    },
  },
  include: {
    I: "./steps_file.js",
  },
  URL: {
    require: "./readJSON.js",
  },
  bootstrap: null,
  mocha: {},
  name: "weather-app-tests",
  plugins: {
    retryFailedStep: {
      enabled: true,
      retries: 10,
      minTimeOut: 50000,
      defaultIgnoredSteps: [],
    },
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
      uniqueScreenshotNames: true,
      deletePreviousResults: false,
      outputDir: "./output",
      stepByStepAllure: false,
    },
    wdio: {
      enabled: false,
      services: ["selenium-standalone"],
      // additional config for service can be passed here
    },
  },
};
