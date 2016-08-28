var express = require('express');
var strava = require('strava-v3');
var app = express.Router();

var token = {}
app.get('/', function(req,res){

    url = "https://www.strava.com/oauth/authorize?client_id=13016+&response_type=code&redirect_uri=http://localhost:3000/login"
    res.send(url);
})


//app.get('/', function(req,res){
//  console.log('login')
//  var code = req.query.code;
//  console.log('code ', code)
//      strava.oauth.getToken(code,function(err,payload) {  
//            var token = payload
//            res.redirect("http://localhost:3000");
//    })
//});


module.exports = app;

