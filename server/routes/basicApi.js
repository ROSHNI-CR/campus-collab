const express = require("express");
const router = express.Router();

router.post("/hello", (req, res) => {
  const name = req.body.name;

  res.send(`Hello ${name}`);
});

module.exports = router;
