const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "validuser@example.com" && password === "Password123") {
    return res.json({ token: "dummy-jwt-token" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
