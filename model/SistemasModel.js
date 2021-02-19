const db = require('../config/db');

class SistemasModel{
    #sisNombre ='';

    constructor(sisNombre){
        this.#sisNombre = sisNombre;
    }

    async AgregarSistema(){
        try {
            const sqlSentence = "INSERT INTO ?? SET ?";
            const sqlPreparing = ['sistemas',{
                sisNombre: this.#sisNombre
            }];

            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error){
            return error;
        }
    }

    static async ListarSistemas(){
        try {
            const sqlSentence = "SELECT * FROM ??";
            const sqlPreparing = ['sistemas'];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);
            return response;
        } catch (error) {
            return error;
        }
    }    

}


module.exports = SistemasModel;