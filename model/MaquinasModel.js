const db = require('../config/db');
class MaquinasModel {
    #maqNombre = '';
    #maqEstado = '';

    constructor( maqNombre, maqEstado) {
        this.#maqNombre = maqNombre;
        this.#maqEstado = maqEstado;
    }

    static async ListarMaquinas(){
        const sqlSentence = 'SELECT * FROM ??';
        const sqlPreparing = ['maquinas'];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);

        return response;
    }
}

module.exports = MaquinasModel;