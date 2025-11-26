const { api } = require("../helpers/apiClient");
const { loadJson } = require("../../src/utils/testDataLoader");
const { step, attachment } = require("jest-allure2-reporter");

describe("Auth API", () => {
  const users = loadJson("users.json");

  test("should login successfully with valid credentials", async () => {
    const validUser = users.find(u => u.type === "valid");

    const res = await api()
      .post("/auth/login")
      .send({
        email: validUser.email,
        password: validUser.password
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  test("should reject invalid login", async () => {
    const invalidUser = users.find(u => u.type === "invalid");

    const res = await api()
      .post("/auth/login")
      .send({
        email: invalidUser.email,
        password: invalidUser.password
      });

    expect(res.status).toBe(401);
  });
});
