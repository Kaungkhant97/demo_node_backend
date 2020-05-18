var mongoose = require("mongoose");

var TokenSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // user._id
  deviceId: { type: String }, // client device unique id
  token: { type: String, default: Math.random }, // random token
  expire: { type: Date, default: function () {
    return Date.now() + 86000000; // One day form now
  }}
});

var Token = mongoose.model("Token", TokenSchema);

module.exports = Token;
