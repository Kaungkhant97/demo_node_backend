/**
 * Created by kaungkhantthu on 10/24/16.
 */
var express = require("express");
var Event  = require("../models/event");
var CrudController = require("./eventCrud");
var router = express.Router();

var EventController = CrudController(Event);




EventController.auth = function (req, res, next) {
    // TODO: by pass next();
    // access denied next(new Error(""));
    next();
};

router.get("/", EventController.auth, EventController.list);
router.get("/:id", EventController.get);
router.post("/", EventController.create);
router.put("/:id", EventController.update);
router.delete("/:id", EventController.remove);

module.exports = router;
