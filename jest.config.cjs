module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/specs/**/*.test.js"],
  setupFilesAfterEnv: ["<rootDir>/tests/config/jest.setup.js"],
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
