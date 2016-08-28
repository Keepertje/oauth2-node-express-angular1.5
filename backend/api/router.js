var express = require('express');
var login = require('./login/login.js');

var router = express.Router();
router.use('/login', login);

module.exports =  router;