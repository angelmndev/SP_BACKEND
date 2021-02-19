const express = require('express');
const route = express.Router();
const {ListarOrdenTrabajoDetalle,AgregarOrdenTrabajoDetalle} = require('../controller/OrdenTrabajoDetalleController');



route.get('/',ListarOrdenTrabajoDetalle);
route.post('/',AgregarOrdenTrabajoDetalle);


module.exports = route;