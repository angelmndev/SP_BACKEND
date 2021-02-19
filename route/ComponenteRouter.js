const express = require('express');
const route = express.Router();
const { ListarComponentes } = require('../controller/ComponenteController');


route.get('/', ListarComponentes);


module.exports = route;