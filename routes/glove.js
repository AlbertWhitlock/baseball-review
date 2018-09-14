const express = require("express");
const router = express.Router();
const gloveController = require("../controllers/glove");

router.get("/all", gloveController.index);
// router.post("/", gloveController.create);
// router.get("/new", gloveController.new);
router.get("/:id", gloveController.show);
router.put("/:id", gloveController.update);
// router.delete("/:id", gloveController.delete);

module.exports = router;
