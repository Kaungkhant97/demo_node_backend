/**
 * Created by kaungkhantthu on 12/6/16.
 */
var mongoose = require('mongoose');


var timeTableSchema = mongoose.Schema({
    tutorial: {type: Boolean},
    day: {type: Number, require: true},
    period: {type: [Number]}
});
var subjectSchema = mongoose.Schema({

    major: {type: String, require: true},
    year: {type: Number, required: true},
    _class: {type: Number},

    _mtype: {type: String},
    subjectname: {type: String, required: true},
    description: {type: String, default: ""},
    teachername: {type: String, required: true},
    subjectId: {type: String, required: true, required: true},
    timetable: {type: [timeTableSchema], required: true}

});

var subject = mongoose.model("Subject", subjectSchema);

module.exports = subject;