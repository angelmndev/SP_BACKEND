const ControlHorasModel = require('../model/ControlHorasModel');

const AgregarControlHoras = async(req,res) => {
    const { idUsuarioFK, idMaquinaFK, chCantidadHoras} = req.body[0];
    
    console.log("Controlador BAckend");
    console.log("controller",idMaquinaFK,idUsuarioFK,chCantidadHoras);
    const controlHorasModel = new ControlHorasModel(
        idUsuarioFK, idMaquinaFK, chCantidadHoras
    );

    const response = await controlHorasModel.AgregarControlHoras();
    if(response){
        res.status(200).json({ success: true, message: 'Se inserto exitosamente' });
    }    
}


const ListarControlHoras = async(req,res) => {
    const response = await ControlHorasModel.ListarControlHoras();
    res.status(200).json(response);
}


const ListarControlHorasPorFecha = async(req,res) => {
    const {fechaInicio,fechaFin,idMaquinaFK} = req.params;
    console.log("Controller",fechaInicio,fechaFin,idMaquinaFK)
    const response = await ControlHorasModel.ListarControlHorasPorFecha(fechaInicio,fechaFin,idMaquinaFK);
    res.status(200).json(response);
}

module.exports = {
    AgregarControlHoras,
    ListarControlHoras,
    ListarControlHorasPorFecha
};