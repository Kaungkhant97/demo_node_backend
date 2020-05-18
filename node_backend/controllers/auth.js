var express = require("express");
var router = express.Router();
var Token = require("../models/token");
var User = require("../models/user");

var AuthController = {
  getToken: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var deviceId = req.body.deviceId;

    User.findOne({username: username}, function (err, user) {
      if (err) {
        return next(err);
      }

      if (!user) {
        var err = new Error("Username is not match!");
        err.status = 401;
        return next(err);
      }
      
      var token = new Token({
        user: user._id,
        deviceId: deviceId
      });

      token.save(function (err, token) {
        if (err) {
          return next(err);
        }

        res.json({token: token.token});
      })
    });
  },

  authenticate: function (req, res, next) {
    var key = req.get("Authorization");
    
    if (!key) {
      return next();
    }

    Token.findOne({token: key})
      .populate("user")
      .exec(function (err, token) {
        if (err)
          console.error(err);

        if (token) {
          req.user = token.user;
        }

        next();
    });
  }
};

module.exports = AuthController;
