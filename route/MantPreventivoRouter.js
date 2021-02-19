const express = require('express');
const route = express.Router();
const { AgregarMantPreventivo, ListarAgregarMantPreventivo, ListarMantPreventivoFiltrado } = require('../controller/MantPreventivoController');


route.post('/agregar',AgregarMantPreventivo);
route.get('/all',ListarAgregarMantPreventivo);
route.get('/filter/:idMaquinaFK/:mpFecha/:idTipoMantenimientoFK', ListarMantPreventivoFiltrado);


module.exports = route;