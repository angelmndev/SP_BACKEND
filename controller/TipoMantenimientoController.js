const TipoMantenimientoModel = require('../model/TipoMantenimientoModel');

const ListarTipoMantenimiento =async (req,res) => {
    const tipoMantenimiento = await TipoMantenimientoModel.ListarTipoMantenimiento();
    if(tipoMantenimiento){
        res.status(200).json(tipoMantenimiento);
    }
}


module.exports = {ListarTipoMantenimiento};