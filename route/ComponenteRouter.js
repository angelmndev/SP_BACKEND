const { Router } = require('express');
const express = require('express');
const route = express.Router();
const { ListarComponentes,AgregarComponente } = require('../controller/ComponenteController');

route.post('/',AgregarComponente);
route.get('/', ListarComponentes);


module.exports = route;