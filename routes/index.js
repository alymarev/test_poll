/**
 * Created by лымарев on 28.05.2015.
 */
'use strict';
var app = require('../app');

app.get('/', function (res, req) {
    req.send("hello, word");
});
