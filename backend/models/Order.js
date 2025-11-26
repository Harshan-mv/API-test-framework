const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    totalAmount: { type: Number, required: true },

    status: { type: String, required: true }, // PAID, CREATED, FAILED

    // Payment-related fields
    paymentId: { type: String },
    paymentStatus: { type: String } // SUCCESS / FAILED
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
