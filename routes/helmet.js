const express = require("express");
const router = express.Router();
const helmetController = require("../controllers/helmet");

router.get("/all", helmetController.index);
// router.post("/", helmetController.create);
// router.get("/new", helmetController.new);
router.get("/:id", helmetController.show);
router.put("/:id", helmetController.update);
// router.delete("/:id", helmetController.delete);

module.exports = router;
