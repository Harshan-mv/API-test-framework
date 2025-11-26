const request = require("supertest");
const { baseUrl } = require("../../src/config/env");

function api() {
  if (!baseUrl) {
    throw new Error("BASE_URL not configured");
  }
  return request(baseUrl);
}

module.exports = { api };
