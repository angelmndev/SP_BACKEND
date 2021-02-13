const express = require('express');
const route = express.Router();
const { AgregarMantPreventivo, ListarAgregarMantPreventivo } = require('../controller/MantPreventivoController');

route.post('/agregar',AgregarMantPreventivo);
route.get('/all',ListarAgregarMantPreventivo);


module.exports = route;