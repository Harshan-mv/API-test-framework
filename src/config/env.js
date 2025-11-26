require("dotenv").config({ silent: true });


const config = {
  baseUrl: process.env.BASE_URL,
  mongoUri: process.env.MONGO_URI
};

module.exports = config;
