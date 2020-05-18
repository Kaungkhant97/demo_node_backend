var mongoose = require('mongoose');

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || process.env.MONGODB_URI ||
    'mongodb://mongo:27017/dev';
mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});
// The http server will listen to an appropriate port, or default to
// port 5000.

