const AreaCultivoModel =   require('../model/AreaCultivoModel');
const ListarAreaCultivo = async(req,res) => {
    const response = await AreaCultivoModel.ListarAreaCultivo();
    res.status(200).json(response);
}



module.exports = {
    ListarAreaCultivo,
}