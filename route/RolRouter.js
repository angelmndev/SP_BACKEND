const express = require('express');
const route = express.Router();
const { AgregarRol, ListarRol, SeleccionarRol, ModificarRol } = require('../controller/RolController');

//Routes
route.post('/agregar',AgregarRol);
route.get('/',ListarRol);
route.get('/seleccionar/:idRol', SeleccionarRol);
route.post('/modificar/:idRol', ModificarRol);

module.exports = route;
