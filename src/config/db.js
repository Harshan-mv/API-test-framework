const mongoose = require("mongoose");
const { mongoUri } = require("./env");

async function connectDB() {
  if (!mongoUri) {
    console.warn("MONGO_URI not set, skipping DB connection");
    return;
  }

  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(mongoUri);
  console.log("✅ Connected to MongoDB for tests");
}

async function disconnectDB() {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

module.exports = { connectDB, disconnectDB };
