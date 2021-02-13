const ControlHorasModel = require('../model/ControlHorasModel');

const AgregarControlHoras = async(req,res) => {
    const { chTotalHora, idUsuarioFK, chFecha, idMaquinaFK, chCantidadHoras} = req.body;
    const controlHorasModel = new ControlHorasModel(
        chTotalHora, idUsuarioFK, chFecha, idMaquinaFK, chCantidadHoras
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


module.exports = {
    AgregarControlHoras,
    ListarControlHoras
};