const e = require('express');
const MaquinasModel = require('../model/MaquinasModel');

const AgregarMaquina = async(req,res) => {
    const {maqNombre} = req.body;
    const maquinas = new MaquinasModel(maqNombre,"1");

    const response = maquinas.AgregarMaquina();
    
    if(response){
        res.status(200).json(response);
    }else{
        res.status(403).json({success: false,message: 'No se pudo insertar'});
    }
}

const ListarMaquinas = async (req,res) => {
    const maquinas = await MaquinasModel.ListarMaquinas();
    res.status(200).json(maquinas);
}

module.exports = {
    ListarMaquinas,
    AgregarMaquina
}