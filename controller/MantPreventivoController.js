const MantPreventivoModel = require('../model/MantPreventivoModel');

const AgregarMantPreventivo = async(req,res)=>{
    console.log("controller");
    console.log("controller MP",req.body);
    const {
        idMaquinaFK, 
        idSistemaFK, 
        idComponenteFK, 
        mpTarea, 
        idTipoMantenimientoFK, 
        mpFrecuenciaHoras, 
        mpRiesgoIdentificado, 
        mpNivelRiesgo,
        idUsuarioFK
    } = req.body[0];

    console.log("Usuario===========>");
    console.log(idUsuarioFK)
    
    const mantPreventivoModel = new MantPreventivoModel(
        idMaquinaFK,
        idSistemaFK,
        idComponenteFK,
        mpTarea,
        idTipoMantenimientoFK,
        mpFrecuenciaHoras,        
        mpRiesgoIdentificado,
        mpNivelRiesgo,
        idUsuarioFK
    )

    const response = await mantPreventivoModel.AgregarMantPreventivo();
    if(response){
        res.status(200).json({success:true,message:'se inserto el mantenimiento preventivo'});
    }
}

const ListarAgregarMantPreventivo = async(req,res) => {
    console.log("lista")
    const MantPreventivo = await MantPreventivoModel.ListarAgregarMantPreventivo();
    res.status(200).json(MantPreventivo);
}

const ListarMantPreventivoFiltrado = async(req,res) => {
    console.log("controller filter:")
    const { idMaquinaFK, mpFecha, idTipoMantenimientoFK} = req.params;
    console.log(idMaquinaFK,mpFecha,idTipoMantenimientoFK);
    const MantPreventivo = await MantPreventivoModel.ListarMantPreventivoFiltrado(idMaquinaFK,mpFecha,idTipoMantenimientoFK);
    res.status(200).json(MantPreventivo);
}


module.exports = {
    AgregarMantPreventivo,
    ListarAgregarMantPreventivo,
    ListarMantPreventivoFiltrado
}