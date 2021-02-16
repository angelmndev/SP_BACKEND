const express = require('express');
const route = express.Router();
const {ListarMaquinas} = require('../controller/MaquinasController');


route.get('/',ListarMaquinas);


module.exports = route;