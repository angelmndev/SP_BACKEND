const express = require('express');
const route = express.Router();
const { AgregarControlHoras, ListarControlHoras, ListarControlHorasPorFecha} = require('../controller/ControlHorasController');

route.post('/agregar',AgregarControlHoras);
route.get('/all',ListarControlHoras);
route.get('/buscar/:fechaIncio/:fechaFin/:idMaquinaFk', ListarControlHorasPorFecha)


module.exports = route;