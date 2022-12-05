const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.send(user);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
