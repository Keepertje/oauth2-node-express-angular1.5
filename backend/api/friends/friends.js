var express = require('express');
var strava = require('strava-v3');
var app = express.Router();


app.get('/api/friends/:token', function(req,res){

    strava.athlete.listFriends({'access_token':req.params.token }
        ,function(err,payload) {
            if(!err) {
                 res.send(payload);
            }
            else {
                console.log(err);
            }
        });
           
})


//for debugging using my own access key
app.get('/', function(req,res){

  strava.athlete.listFriends({"per_page":200},
        function(err,payload) {
            if(!err) {
                 res.send(payload);
            }
            else {
                console.log(err);
            }
        });
});
           
module.exports = app;
