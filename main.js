/**
 * Created by лымарев on 28.05.2015.
 */
var http = require('http');
var app = require('./app');

http.createServer(app).listen(3000, function () {
    console.log('Server running!!');
});