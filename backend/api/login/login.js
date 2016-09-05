var express = require('express');
var request = require('request')
var app = express.Router();

app.get('/:code', function(req,res){
  var mycode = req.params.code;
  var endpoint = 'https://www.strava.com/oauth/token';

    var url = endpoint
        , options = {
            url: url
            , method: 'POST'
            , json: true
            ,form : {
                client_id : "MYCLIENTID" ,
                client_secret : "<MY_CLIENT_SECRET>" ,
                code : mycode
            }
        };

    request(options, function (err, response, payload) {
        if (err  || response.statusCode !== 200) {
            console.log('api call error');
            console.log(err);
        }
        res.status(response.statusCode).send(payload)
    });
           
});


module.exports = app;

