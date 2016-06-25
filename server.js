process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = 1337;
var config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport'),
    db = mongoose(),
    app = express(),
    auth = passport();

app.listen(port);

module.exports = app;
console.log(process.env.NODE_ENV + ' server running at http://localhost:' + port);
