const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/bat", require("./bat"));
router.use("/glove", require("./glove"));
router.use("/ball", require("./ball"));
router.use("/helmet", require("./helmet"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
