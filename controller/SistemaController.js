const SistemasModel = require('../model/SistemasModel');


const ListarSistemas = async (req,res) => {
    const sistemas = await SistemasModel.ListarSistemas();
    if(sistemas){
        res.status(200).json(sistemas);
    }else{
        res.status(403).json({success: false});
    }
}



module.exports = { ListarSistemas};