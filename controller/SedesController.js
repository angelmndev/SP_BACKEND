const SedeModel = require('../model/SedeModel');


const ListarSede = async(req,res) => {
    const sede = await SedeModel.ListarSede();
    console.log("controller",sede)
    res.status(200).json(sede);
}


module.exports = {
    ListarSede
}