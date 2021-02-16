const express = require('express');
const route = express.Router();
const { showLogin } = require('../controller/LoginController');

//router
route.post('/',showLogin);


module.exports = route;