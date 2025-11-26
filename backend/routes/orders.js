const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

router.post("/", async (req, res) => {
  const { items } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: "No items" });
  }

  const newOrder = new Order({
    userId: "u1",
    items,
    totalAmount: items.reduce((sum, i) => sum + (i.qty * 100), 0),
    status: "CREATED"
  });

  await newOrder.save();

  res.status(201).json({ orderId: newOrder._id });
});

module.exports = router;
