/**
 * Created by kaungkhantthu on 12/6/16.
 */

var express = require("express");
var subject = require("../models/subject");
var CrudController = require("./subjectCrud");
var router = express.Router();

var SubjectController = CrudController(subject);

router.get("/", SubjectController.list);
router.get("/:major/:year", SubjectController.get);
router.get("/:major/:year/:_class", SubjectController.get);
router.get("/:major/:year/:_class/:day", SubjectController.get);
router.post("/", SubjectController.create);
router.delete("/:id", SubjectController.remove);

module.exports = router;



