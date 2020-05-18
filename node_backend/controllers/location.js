/**
 * Created by kaungkhantthu on 2/10/17.
 */
var express = require("express");
var Location  = require("../models/location");
var CrudController = require("./crud");
var router = express.Router();

var LocationController = CrudController(Location);




LocationController.auth = function (req, res, next) {
    // TODO: by pass next();
    // access denied next(new Error(""));
    next();
};

router.get("/", LocationController.auth, LocationController.list);
router.get("/recent/:hr",  LocationController.recent);
router.get("/:id", LocationController.get);
router.post("/", LocationController.create);
router.put("/:id", LocationController.update);
router.delete("/:id", LocationController.remove);

module.exports = router;