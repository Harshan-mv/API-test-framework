const { api } = require("../helpers/apiClient");
const { step, attachment } = require("jest-allure2-reporter");

describe("Products API", () => {
  test("should return list of products", async () => {
    const res = await api().get("/products");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
