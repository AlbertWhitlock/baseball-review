const express = require("express");
const router = express.Router();
const batController = require("../controllers/bat");

router.get("/", batController.index);
// router.post("/", batController.create);
// router.get("/new", batController.new);
router.get("/:id", batController.show);
router.put("/:id", batController.update);
// router.delete("/:id", batController.delete);

module.exports = router;
