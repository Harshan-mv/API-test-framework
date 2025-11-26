const { api } = require("../helpers/apiClient");
const { connectDB, disconnectDB } = require("../../src/config/db");
const Order = require("../../src/models/Order");
const { step, attachment } = require("jest-allure2-reporter");

describe("Order Flow", () => {
  let token;

  beforeAll(async () => {
    await connectDB();

    const res = await api().post("/auth/login").send({
      email: "validuser@example.com",
      password: "Password123"
    });
    token = res.body.token;
  });

  afterAll(async () => {
    await Order.deleteMany({});
    await disconnectDB();
  });

  test("should place order and persist in DB with PAID status when payment succeeds", async () => {
    const res = await api()
      .post("/orders")
      .set("Authorization", `Bearer ${token}`)
      .send({
        items: [
          { productId: "p1", qty: 2 },
          { productId: "p2", qty: 1 }
        ]
        // simulateFail not set → success path
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("orderId");
    expect(res.body).toHaveProperty("paymentStatus", "SUCCESS");

    const orderFromDb = await Order.findById(res.body.orderId);
    expect(orderFromDb).not.toBeNull();
    expect(orderFromDb.items.length).toBe(2);
    expect(orderFromDb.status).toBe("PAID");
    expect(orderFromDb.paymentStatus).toBe("SUCCESS");
    expect(orderFromDb.paymentId).toBeDefined();
  });

  test("should fail order creation when payment fails and not persist in DB", async () => {
    const beforeCount = await Order.countDocuments();

    const res = await api()
      .post("/orders")
      .set("Authorization", `Bearer ${token}`)
      .send({
        items: [
          { productId: "p1", qty: 1 }
        ],
        simulateFail: true // 💣 trigger Nock failure
      });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "Payment failed");
    expect(res.body.details).toBeDefined();
    expect(res.body.details.status).toBe("FAILED");

    const afterCount = await Order.countDocuments();
    expect(afterCount).toBe(beforeCount); // no new order created
  });
});
