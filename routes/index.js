/**
 * Created by ������� on 28.05.2015.
 */
'use strict';
var app = require('../app');

app.get('/', function (res, req, next) {
    req.url = 'index.html';
    next();
});

app.get('/*',function(req, res){
    res.render(req.params[0])
});