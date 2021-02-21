const express = require('express');
const route = express.Router();
const {ListarMaquinas, AgregarMaquina} = require('../controller/MaquinasController');

route.post('/',AgregarMaquina);
route.get('/',ListarMaquinas);


module.exports = route;