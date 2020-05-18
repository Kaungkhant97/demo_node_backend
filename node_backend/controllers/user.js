var express = require("express");
var User = require("../models/user");
var CrudController = require("./crud");
var router = express.Router();

var UserController = CrudController(User);

router.get("/", UserController.list);
router.get("/:id", UserController.get);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.remove);

module.exports = router;
