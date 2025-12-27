const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// PROTECTED ROUTE
router.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You accessed a protected route 🎉",
    userId: req.userId
  });
});

module.exports = router;
