// Jest setup file
require("dotenv").config({ silent: true });
jest.setTimeout(30000); // 30 seconds for API calls
module.exports = {
  testEnvironment: "node",
  reporters: [
    "default",
    [
      "jest-allure2-reporter",
      {
        resultsDir: "allure-results"
      }
    ]
  ]
};
