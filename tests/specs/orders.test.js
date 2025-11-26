const { api } = require("../helpers/apiClient");
const { connectDB, disconnectDB } = require("../../src/config/db");
const Order = require("../../src/models/Order");

describe("Order Flow", () => {
  let token;

  beforeAll(async () => {
    await connectDB();
    // First login to get token; adjust according to your backend
    const res = await api().post("/auth/login").send({
      email: "validuser@example.com",
      password: "Password123"
    });
    token = res.body.token;
  });

  afterAll(async () => {
    await disconnectDB();
  });

  test("should place order and persist in DB", async () => {
    const res = await api()
      .post("/orders")
      .set("Authorization", `Bearer ${token}`)
      .send({
        items: [
          { productId: "p1", qty: 2 },
          { productId: "p2", qty: 1 }
        ]
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("orderId");

    const orderFromDb = await Order.findOne({ _id: res.body.orderId });
    expect(orderFromDb).not.toBeNull();
    expect(orderFromDb.items.length).toBe(2);
  });
});
