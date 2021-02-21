const ComponenteModel = require('../model/ComponenteModel');

const AgregarComponente = async(req,res) =>{
    const {comNombre} = req.body;
    const componente = new ComponenteModel(comNombre);
    
    const response = await componente.AgregarComponentes();
    if(response){
        res.status(200).json({success:true,message: `componente ${comNombre} se guardó exitosamente`});
    }else{
        res.status(200).json({success:false,message: `No se pudo guardó el componente ${comNombre} exitosamente`});
    }
}


const ListarComponentes = async(req,res) => {
    const componente = await ComponenteModel.ListarComponentes();
    if(componente){
        res.status(200).json(componente)
    }else{
        res.status(403).json({success:false})
    }    
}

const SeleccionarComponente = async(req,res) => {
    const {idComponente} = req.params;
    const componente = await ComponenteModel.SeleccionarComponentes(idComponente);
    if(componente){
        res.status(200).json(componente);
    }else{
        res.status(403).json({success:false})
    }
}

const ModificarComponentes = async(req,res) => {
    const componente = req.body;
    const response = await ComponenteModel.ModificarComponentes(componente);
    if(response){
        res.status(200).json(response);
    }else{
        res.status(403).json({success:false});
    }
}


const EliminarComponente= async(req,res) => {
    const {idComponente} = req.params;
    const response = await ComponenteModel.EliminarComponente(idComponente);
    if(response){
        res.status(200).json({success:true,message:'Eliminado exitosamente'});
    }else{
        res.status(403).json({success:false,message: 'No se pudo eliminar'})
    }
}


module.exports = {
    AgregarComponente,
    ListarComponentes,
    SeleccionarComponente,
    ModificarComponentes,
    EliminarComponente
}