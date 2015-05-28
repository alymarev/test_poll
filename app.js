/**
 * Created by лымарев on 27.05.2015.
 */
var http = require('http');
var express = require('express');
var jade = require('jade');
var stylus = require('stylus');

var app = module.exports = exports = express();

app.get('/', function (res, req) {
   req.send("hello, word");
});


