const db = require('../config/db');
class MaquinasModel {
    #maqNombre = '';
    #maqEstado = '';

    constructor( maqNombre, maqEstado) {
        this.#maqNombre = maqNombre;
        this.#maqEstado = maqEstado;
    }


    async AgregarMaquina(){

        console.log("model:",this.#maqNombre);
        try {
            const sqlSentence = "INSERT INTO ?? SET ?";
            const sqlPreparing = ['maquinas',{
                maqNombre: this.#maqNombre,
                maqEstado: this.#maqEstado
            }]

            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;

        } catch (error) {
            return error;
        }
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