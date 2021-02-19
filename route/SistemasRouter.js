const express = require('express');
const route = express.Router();
const { ListarSistemas } = require('../controller/SistemaController');


route.get('/', ListarSistemas);


module.exports = route;