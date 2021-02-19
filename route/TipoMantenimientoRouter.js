const express = require('express');
const route = express.Router();
const { ListarTipoMantenimiento } = require('../controller/TipoMantenimientoController');


route.get('/', ListarTipoMantenimiento);


module.exports = route;