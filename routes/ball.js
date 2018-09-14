const express = require("express");
const router = express.Router();
const ballController = require("../controllers/ball");

router.get("/all", ballController.index);
// router.post("/", ballController.create);
// router.get("/new", ballController.new);
router.get("/:id", ballController.show);
router.put("/:id", ballController.update);
// router.delete("/:id", ballController.delete);

module.exports = router;
