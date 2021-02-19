const express = require('express');
const route = express.Router();
const { ListarSede } = require('../controller/SedesController');


route.get('/',ListarSede);

module.exports = route;