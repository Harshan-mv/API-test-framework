const express = require("express");
const Order = require("../models/Order");
const { chargePayment } = require("../services/paymentService");

const router = express.Router();

router.post("/", async (req, res) => {
  const { items, simulateFail } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "No items" });
  }

  const totalAmount = items.reduce((sum, i) => sum + i.qty * 100, 0);

  try {
    // 💳 Call payment gateway (mocked by Nock)
    const paymentResult = await chargePayment({
      amount: totalAmount,
      simulateFail: !!simulateFail
    });
      console.log("Payment Result:", paymentResult);

    const newOrder = new Order({
      userId: "u1",
      items,
      totalAmount,
      status: "PAID",
      paymentId: paymentResult.paymentId,
      paymentStatus: paymentResult.status
    });

    await newOrder.save();

    return res.status(201).json({
      orderId: newOrder._id,
      paymentStatus: paymentResult.status
    });
  } catch (err) {
    console.error("Payment error:", err.details || err.message);

    // ❌ Payment failed → no order created
    return res.status(400).json({
      message: "Payment failed",
      details: err.details || null
    });
  }
});

module.exports = router;
