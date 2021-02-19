const OrdenTrabajoDetalleModel = require('../model/OrdenTrabajoDetalleModel');


const AgregarOrdenTrabajoDetalle = async(req,res) => {
    const { idSistemaFK, idComponenteFK, idTipoMantenimientoFK, otdTareas, otdEjecutado, otdObservacion, idMantenimientoPreventivoFK, idOrdenTrabajoFK} = req.body;
    const ordentrabajodetalle = new OrdenTrabajoDetalleModel(idSistemaFK, idComponenteFK, idTipoMantenimientoFK, otdTareas, otdEjecutado, otdObservacion, idMantenimientoPreventivoFK, idOrdenTrabajoFK);    
    const response = await ordentrabajodetalle.AgregarOrdenTrabajoDetalle();
    if(response){
        res.status(200).json(response);
    }else{
        res.status(403).json({success: false,message: 'Error al insertar'})
    }
    return response;
}



const ListarOrdenTrabajoDetalle = async(req,res) => {
    const data = await OrdenTrabajoDetalleModel.ListarOrdenTrabajoDetalle();
    res.status(200).json(data);
}


module.exports = {
    AgregarOrdenTrabajoDetalle,
    ListarOrdenTrabajoDetalle
}