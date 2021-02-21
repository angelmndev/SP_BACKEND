const express = require('express');
const route = express.Router();
const { ListarOrdenTrabajoDetalle, AgregarOrdenTrabajoDetalle, ListarOrdenTrabajoDetallePorNumero} = require('../controller/OrdenTrabajoDetalleController');



route.get('/',ListarOrdenTrabajoDetalle);
route.post('/',AgregarOrdenTrabajoDetalle);
route.get('/filter/:numero', ListarOrdenTrabajoDetallePorNumero)

module.exports = route;

