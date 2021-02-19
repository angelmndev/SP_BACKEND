const db = require('../config/db');

class AreaCultivoModel{
    #acNombre = '';
    #idSedeFK= '';

    constructor(acNombre, idSedeFK){
        this.#acNombre = acNombre;
        this.#idSedeFK = idSedeFK;
    }

    async AgregarAreaCultivo(){
        try {
            const sqlSentence = "INSERT INTO ?? SET ?";
            const sqlPreparing = ['areaCultivos',{
                acNombre:this.#acNombre,
                idSedeFK:this.#idSedeFK
            }]

            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return error;
        }
    }


    static async ListarAreaCultivo(){
        try {
            const sqlSentence = "SELECT * FROM ??";
            const sqlPreparing = ['areaCultivos'];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return error;
        }
    }


    static async SeleccionarAreaCultivo(idAreaCultivo){
        try {
            const sqlSentence = "SELECT * FROM ?? WHERE idAreaCultivo = ?";
            const sqlPreparing = ['areaCultivos',idAreaCultivo];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return response;
        }
    }

    static async ModificarAreaCultivo(areaCultivo){
        try {
            const {idAreaCultivo,acNombre,idSedeFK} = areaCultivo;
            const sqlSentence = "UPDATE ?? SET acNombre=?, idSedeFK=? WHERE idAreaCultivo=?";
            const sqlPreparing = ['areaCultivos',idAreaCultivo,acNombre,idSedeFK];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return response;
        }
    }

    static async EliminarAreaCultivo(idAreaCultivo){
        try {
            const sqlSentence = "DELETE FROM ?? WHERE idAreaCultivo = ?";
            const sqlPreparing = ['areaCultivos',idAreaCultivo];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = AreaCultivoModel;