require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.APP_PORT;

require('./config/db');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


//rol
const rol = require('./route/RolRouter');
app.use('/rol',rol)

//Mantenimiento preventivo
const mantPreventivo = require('./route/MantPreventivoRouter');
app.use('/matenimiento',mantPreventivo);


//Control de horas
const controlHoras = require('./route/ControlHorasRouter');
app.use('/controlHoras', controlHoras);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


