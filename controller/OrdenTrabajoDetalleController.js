const OrdenTrabajoDetalleModel = require('../model/OrdenTrabajoDetalleModel');


const AgregarOrdenTrabajoDetallessss = async(req,res) => {
    const { idSistemaFK, idComponenteFK, idTipoMantenimientoFK, otdTareas, otdEjecutado, otdObservacion, idMantenimientoPreventivoFK} = req.body;
   
    const ordentrabajodetalle = new OrdenTrabajoDetalleModel(idSistemaFK, idComponenteFK, idTipoMantenimientoFK, otdTareas, otdEjecutado, otdObservacion, idMantenimientoPreventivoFK);    
    const response = await ordentrabajodetalle.AgregarOrdenTrabajoDetalle();
    if(response){
        res.status(200).json(response);
    }else{
        res.status(403).json({success: false,message: 'Error al insertar'})
    }
    return response;
}

const AgregarOrdenTrabajoDetalle = async(req,res) => {
   
    const response = await OrdenTrabajoDetalleModel.AgregarOrdenTrabajoDetalle(req.body)
    if (response) {
        res.status(200).json(response);
    } else {
        res.status(403).json({ success: false, message: 'Error al insertar' })
    }
    return response;
}

const ListarOrdenTrabajoDetalle = async(req,res) => {
    const data = await OrdenTrabajoDetalleModel.ListarOrdenTrabajoDetalle();
    res.status(200).json(data);
}

const ListarOrdenTrabajoDetallePorNumero = async(req,res) => {
    const {numero} = req.params;
    const data  = await OrdenTrabajoDetalleModel.ListarOrdenTrabajoDetallePorNumero(numero);
    res.status(200).json(data);
}

module.exports = {
    AgregarOrdenTrabajoDetalle,
    ListarOrdenTrabajoDetalle,
    ListarOrdenTrabajoDetallePorNumero
}