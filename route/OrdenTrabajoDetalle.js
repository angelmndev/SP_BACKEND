const express = require('express');
const route = express.Router();
const { ListarOrdenTrabajoDetalle, AgregarOrdenTrabajoDetalle, ListarOrdenTrabajoDetallePorNumero,AgregarEjecutadoObservacion} = require('../controller/OrdenTrabajoDetalleController');



route.get('/',ListarOrdenTrabajoDetalle);
route.post('/',AgregarOrdenTrabajoDetalle);
route.get('/filter/:numero', ListarOrdenTrabajoDetallePorNumero)
route.post('/ejecutado',AgregarEjecutadoObservacion)

module.exports = route;

