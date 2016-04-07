var express = require('express');
//var parser = require('body-parser');

var app = new express();

app.use(express.static(__dirname + '/../public'));

app.get('/', function(req,res){

        res.render('./../frontend/streetLayout.ejs', {});
    });

app.get('/home', function(req,res){

        res.render('./../frontend/streetLayout.ejs', {});
    });

app.get('/backoffice', function(req,res){

        res.render('./../frontend/backOfficeLayout.ejs', {});
    });

app.listen(7777);

module.exports = app;