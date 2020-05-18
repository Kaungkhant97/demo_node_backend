var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    username: {type: String, trim: true, index: {unique: true}},
    email: {type: String, trim: true, index: {unique: true}},
    password: {type: String},
    fbid: {type: String, trim: true, index: {unique: true}},

    permission: {
        read: Array,
        write: Array
    }
});

var User = mongoose.model("User", UserSchema);

User.prototype.validPassword = function (pass) {
    return pass === this.password;
};

module.exports = User;
