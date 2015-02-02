var express = require('express');

module.exports = function(app)
{
    ///////////////////////////////////////////////////////////////////
    ///////////// ONLY PERFORM EDITS BELOW THIS POINT /////////////////
    ///////////////////////////////////////////////////////////////////

    // port: the port the application should be served on
    app.set('port', process.env.PORT || 54291);
    // databaseName: name of the MongoDB database to use
    app.set('databaseName', 'progtest');
    // apiPrefix: URL prefix for API routes
    app.set('apiPrefix', '/api');

    ///////////////////////////////////////////////////////////////////
    ///////////// DO NOT ALTER BELOW THIS POINT ///////////////////////
    ///////////////////////////////////////////////////////////////////

    // serve client
    app.use(express.static(__dirname + '/../app'));
}
