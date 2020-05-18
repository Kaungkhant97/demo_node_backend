var express = require("express");
var db = require("./config");
var bodyParser = require("body-parser");


var theport = process.env.PORT || 5000;
var app = express();
var morgan = require('morgan');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan('dev'));

/* BOOKS */

var auth = require("./controllers/auth");
var user = require("./controllers/user");
var event = require("./controllers/event");
var subject = require("./controllers/subject");
var location = require("./controllers/location");




app.use(auth.authenticate);

app.post("/auth", auth.getToken);
app.use("/users", user);
app.use("/subject", subject); 
app.use("/events", event);
app.use("/location", location);


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

app.listen(theport);
