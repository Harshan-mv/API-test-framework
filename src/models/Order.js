const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: String,
    items: Array,
    totalAmount: Number,
    status: String,              // e.g. CREATED, PAID, PAYMENT_FAILED
    paymentId: String,           // from payment gateway
    paymentStatus: String        // SUCCESS / FAILED
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
