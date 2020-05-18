/**
 * Created by kaungkhantthu on 10/24/16.
 */
var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({

    title: {type: String, required: true},
    Place: {type: String, required: true},
    Description: {type: String, default: ""},
    Date: {type: String, required: true},
    Time: {type: String, required: true},
    imgUrl: {type: String},
   

    byUser: {type: String},
    byUserid: {type: String},
    publishedDate: {
        type: Date,
        default: Date.now()
    },
    isApproved:{
        type:Boolean,
        default:false
    }
});

var Event = mongoose.model("Event", eventSchema);

module.exports = Event;