const express = require('express');
const route = express.Router();
const { ListarAreaCultivo } = require('../controller/AreaCultivoController');

route.get('/',ListarAreaCultivo);

module.exports = route;