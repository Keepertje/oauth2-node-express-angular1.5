var express = require('express');

var strava = require('strava-v3');
var app = express();


var apiRouter = require('./backend/api/router');
var frontendRouter = require('./backend/frontend/router');

// Link /api/v1 to the api router
app.use('/api', apiRouter);

//Serve the frontend.
app.use('/', frontendRouter);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});