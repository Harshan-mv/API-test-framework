// src/models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: String,
    items: Array,
    totalAmount: Number,
    status: String
  },
  { collection: "orders" }
);

module.exports = mongoose.model("Order", orderSchema);
