/**
 * Created by kaungkhantthu on 2/10/17.
 */
var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({

    address: {type: String, required: true},
    comment: {type: String, default: ""},
    status: {type: String, default: ""},
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},


    role: {type: String},
    byReporter: {type: String},
    publishedDate: {
        type: Date,
        default: Date.now()
    }

});

var Location = mongoose.model("Locations", locationSchema);

module.exports = Location;