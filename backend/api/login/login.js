var express = require('express');
var strava = require('strava-v3')
var app = express.Router();

var token = {}



app.get('/:code', function(req,res){
  console.log('login')
  var code = req.params.code;
  console.log('code ', code)
      strava.oauth.getToken(code,function(err,payload) {  
          console.log(payload)
            console.log(err)
            res.send(payload)
    })
});


module.exports = app;

