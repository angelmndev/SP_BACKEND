const MantPreventivoModel = require('../model/MantPreventivoModel');

const AgregarMantPreventivo = async(req,res)=>{
    const {
        idMaquinaFK, 
        idSistemaFK, 
        idComponenteFK, 
        mpTarea, 
        idTipoMantenimientoFK, 
        mpFrecuenciaHoras, 
        mpHorasAcumuladas, 
        mpStatus, 
        mpFecha, 
        mpRiesgoIdentificado, 
        idUsuarioFK
    } = req.body;

    console.log("Usuario===========>");
    console.log(idUsuarioFK)
    
    const mantPreventivoModel = new MantPreventivoModel(
        idMaquinaFK,
        idSistemaFK,
        idComponenteFK,
        mpTarea,
        idTipoMantenimientoFK,
        mpFrecuenciaHoras,
        mpHorasAcumuladas,
        mpStatus,
        mpFecha,
        mpRiesgoIdentificado,
        idUsuarioFK
    )

    const response = await mantPreventivoModel.AgregarMantPreventivo();
    if(response){
        res.status(200).json({success:true,message:'se inserto el mantenimiento preventivo'});
    }
}

const ListarAgregarMantPreventivo = async(req,res) => {
    const MantPreventivo = await MantPreventivoModel.ListarAgregarMantPreventivo();
    res.status(200).json(MantPreventivo);
}


module.exports = {
    AgregarMantPreventivo,
    ListarAgregarMantPreventivo
}