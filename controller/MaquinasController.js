const MaquinasModel = require('../model/MaquinasModel');

const ListarMaquinas = async (req,res) => {
    const maquinas = await MaquinasModel.ListarMaquinas();
    res.status(200).json(maquinas);
}

module.exports = {
    ListarMaquinas
}