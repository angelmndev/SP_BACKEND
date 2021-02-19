const express = require('express');
const route = express.Router();

const {AgregarOrdenTrabajo,ObtenerNumeroOrdenTrabajo} = require('../controller/OrdenTrabajoController')


route.post('/',AgregarOrdenTrabajo);
route.get('/numeroOrden',ObtenerNumeroOrdenTrabajo);

module.exports = route;
