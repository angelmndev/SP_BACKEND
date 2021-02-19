const db = require('../config/db');

class SedeModel{
    #sedeNombre = '';

    constructor(sedeNombre){
        this.#sedeNombre = sedeNombre;        
    }

    async AgregarSede(){
        try {
            const sqlSentence = "INSERT INTO ?? SET ?";
            const sqlPreparing = ['sedes',{sedeNombre:this.#sedeNombre}];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return response;
        }
    }


    static async ListarSede(){
        console.log("model")
        try {
            const sqlSentence = "SELECT * FROM ??";
            const sqlPreparing = ['sedes'];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);
            console.log(response);
            return response;

        } catch (error) {

            console.log(error)
            return response;
        }
    }


    static async SeleccionarSede(idSede){
        try {
            const sqlSentence = "SELECT * FROM ?? WHERE idSede = ?";
            const sqlPreparing = ['sedes',idSede];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.format(sql);

            return response;
        } catch (error) {
            return error;
        }
    }

    static async ModificarSede(sede){
        try {
            const {sedeNombre} = sede;
            const sqlSentence = "UPDATE ?? SET sedeNombre=? WHERE idSede = ?";
            const sqlPreparing = ['sedes',sedeNombre];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return error;
        }
    }

    static async EliminarSede(idSede){
        try {
            const sqlSentence = "DELETE FROM ?? WHERE idSede = ?";
            const sqlPreparing = ['sedes',idSede];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = SedeModel;