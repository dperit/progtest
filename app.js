
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// import express and start express app
var express = require("express")
    , app = express();

// Connection URL
var url = 'mongodb://localhost:27017/progtest';

// configuration
// PLEASE SEE ./config/project.js
// TO SET OPTIONS SUCH AS PORT AND
// API PREFIX
require('./config/progtest')(app);

var routes = require('./routes/index')(app);

console.log("Connecting to database");
// Use connect method to connect to the Server
//MongoClient.connect(url, function(err, db) {
//    assert.equal(null, err);
//    console.log("Connected correctly to database");
//    app.set("db", db);

    console.log("Progtest API going online...");
// start application
    var port = app.get('port');
    app.listen(port);
    console.log("Progtest API online: listening on port " + port);

//});







