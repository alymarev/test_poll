/**
 * Created by лымарев on 28.05.2015.
 */
var http = require('http');
var app = require('./app');

require('./routes/index');

http.createServer(app).listen(app.get('port'), function () {
    console.log('Server running! copy and paste in browser http://localhost:3000/');
});