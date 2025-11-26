const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: String,
    items: Array,
    totalAmount: Number,
    status: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
