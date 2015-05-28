/**
 * Created by лымарев on 27.05.2015.
 */
var http = require('http');
var express = require('express');
var jade = require('jade');
var stylus = require('stylus');

var app = module.exports = exports = express();

app.set('port',3000);
app.set('views','./views');
app.set('view engine', 'jade');
app.use(stylus.middleware({
    src:'./public'
    //compress: true

}));

app.use(express.static('./public'));

