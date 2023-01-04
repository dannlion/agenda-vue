const express = require("express");
const router = express.Router();
const controller = require("../controller/indexController");

// As rotas do CRUD:
router.get("/", controller.user.getAll);
router.get("/:id", controller.user.getUserdata);
router.post("/", controller.user.createNew);
router.put("/:id", controller.user.editAt);
router.delete("/:id", controller.user.deleteUser);
module.exports = router;
