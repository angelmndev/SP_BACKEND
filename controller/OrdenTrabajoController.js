const { compareSync } = require('bcrypt');
const OrdenTrabajoModel = require('../model/OrdenTrabajoModel');

const AgregarOrdenTrabajo = async (req, res) => {
    
    const {
        otNumeroOrden, otFecha, idSedeFK, idAreaCultivoFK, otTiempoEstimado, otHoraInicio, otHoraFin, idUsuarioSupervisorFK, idUsuarioPersonalFK, idMaquinaFK
    } = req.body[0];

    console.log("Oreden trabajo controller: ...")
    console.log(otNumeroOrden, otFecha, idSedeFK, idAreaCultivoFK,
        otTiempoEstimado, otHoraInicio, otHoraFin,
        idUsuarioSupervisorFK, idUsuarioPersonalFK,
        idMaquinaFK);

    const oTrabajo = new OrdenTrabajoModel(
        otNumeroOrden, otFecha, idSedeFK, 
        idAreaCultivoFK, otTiempoEstimado,
        otHoraInicio, otHoraFin, idUsuarioSupervisorFK,
        idUsuarioPersonalFK, idMaquinaFK)

    const response = await oTrabajo.AgregarOrdenTrabajo();

    if (response) {
        res.status(200).json({ success: true, message: 'Orden guardado exitosamente' })
    } else {
        res.status(403).json({ success: false, message: 'Operacion fallida' })
    }
}

const ListarOrdenTrabajo = async (req, res) => {
    const ordenTrabajo = await OrdenTrabajoModel.ListarOrdenTrabajo();
    if (ordenTrabajo) {
        res.status(200).json(ordenTrabajo);
    } else {
        res.status(403).json({ success: false })
    }
}


const ObtenerNumeroOrdenTrabajo = async (req, res) => {
    const numeroOrden = await OrdenTrabajoModel.ObtenerNumeroOrdenTrabajo();
    if (numeroOrden)
        res.status(200).json(numeroOrden == null ? 1 : numeroOrden)
}

module.exports = {
    ListarOrdenTrabajo,
    ObtenerNumeroOrdenTrabajo,
    AgregarOrdenTrabajo
}




