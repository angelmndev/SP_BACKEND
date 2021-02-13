const express = require('express');
const route = express.Router();
const {AgregarControlHoras,ListarControlHoras} = require('../controller/ControlHorasController');

route.post('/agregar',AgregarControlHoras);
route.get('/all',ListarControlHoras);


module.exports = route;