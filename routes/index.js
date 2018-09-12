const express = require("express");
const router = express.Router();
//const batController = require("../controllers/bat");
//const gloveController = require("../controllers/glove");
//const ballController = require("../controllers/ball");
// const helmetController = require("../controllers/helmet");

router.use("/", require("./application.js"));
router.use("/bat", require("./bat"));
router.use("/glove", require("./glove"));
router.use("/ball", require("./ball"));
router.use("/helmet", require("./helmet"));

// //bat
// router.get("/bat", batController.index);
// router.get("/bat/:id", batController.show);
// router.put("/bat/:id", batController.update);

// //glove
// router.get("/glove", gloveController.index);
// router.get("/glove/:id", gloveController.show);
// router.put("/glove/:id", gloveController.update);

// //ball
// router.get("/ball/", ballController.index);
// router.get("/ball/:id", ballController.show);
// router.put("/ball/:id", ballController.update);

// //helmet
// router.get("/helmet/", helmetController.index);
// router.get("/helmet/:id", helmetController.show);
// router.put("/helmet/:id", helmetController.update);

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
