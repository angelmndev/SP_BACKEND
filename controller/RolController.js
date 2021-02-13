const { response } = require('express');
const RolModel = require('../model/RolModel');

/* Agregar rol controller */
const AgregarRol = async (req,res) => {
    const {rolNombre} = req.body;
    const rol = new RolModel(rolNombre);

    const response = await rol.AgregarRol();
    if(response){
        res.status(200).json({success:true,message: 'Rol insertado exitosamente'});
    }else{
        res.status(403).json({ success: true, message: 'Operacion fallido' });
    }
}

/* Listar rol controller */
const ListarRol = async(req,res) => {
    const response = await RolModel.ListarRol();
    res.status(200).json(response);
}


/* Seleccionar rol controller */
const SeleccionarRol = async(req,res) => {
    const {idRol} = req.params;
    const rol = await RolModel.SeleccionarRol(idRol);
    res.status(200).json(rol);
}

/* Modificar Rol controller */
const ModificarRol = async(req,res) => {
    const {idRol} = req.params;
    const {rolNombre} = req.body;
    console.log(idRol+" "+rolNombre);
    const response = await RolModel.ModificarRol(idRol,rolNombre);
    if(response){
        res.status(200).json({success:true,message:'Modificado exitosamente'});
    }
}

module.exports = {
    AgregarRol,
    ListarRol,
    SeleccionarRol,
    ModificarRol
}