const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.json([
    { id: "p1", name: "Product 1", price: 100 },
    { id: "p2", name: "Product 2", price: 200 }
  ]);
});

module.exports = router;
