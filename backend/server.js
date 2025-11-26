
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");
const ordersRoutes = require("./routes/orders");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/orders", ordersRoutes);

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ecomm_api";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("API running on port", PORT);
});
