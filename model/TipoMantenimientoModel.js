const db = require('../config/db');

class TipoMantenimientoModel{
    #tmNumero = '';
    #tmNombre = '';

    constructor(tmNumero, tmNombre){
        this.tmNumero = tmNumero;
        this.#tmNombre = tmNombre;        
    }

    async AgregarTipoMantenimiento(){
        try {
            const sqlSentence = "INSERT INTO ?? SET ?";
            const sqlPreparing = ['tipomantenimiento',{
                tmNumero:this.#tmNumero,
                tmNombre:this.#tmNombre                
            }];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return error;
        }
    }

    static async ListarTipoMantenimiento(){
        try {
            const sqlSentence = "SELECT * FROM ??";
            const sqlPreparing = ['tipoMantenimiento'];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;

        } catch (error) {
            return error;
        }
    }

    static async SeleccionarTipoMantenimiento(idTipoMantenimiento){
        try {
            const sqlSentence = "SELECT * FROM ?? WHERE idTipoMantenimiento = ?";
            const sqlPreparing = ['tipomantenimiento',idTipoMantenimiento];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;

        } catch (error) {
            return error;
        }
    }

    static async ModificarTipoMantenimiento(tipoMantenimiento){
        try {
            const {idTipoMantenimiento, tmNumero, tmNombre} = tipoMantenimiento;
            const sqlSentence = "UPDATE ?? SET tmNumero= ?, tmNombre = ? WHERE idTipoMantenimiento = ?";
            const sqlPreparing = ['tipomantenimiento',tmNumero,tmNombre,idTipoMantenimiento];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return error;
        }
    }


    static async EliminarTipoMovimiento(idTipoMantenimiento){
        try {
            const sqlSentence = "DELETE FROM ?? WHERE idTipoMantenimiento = ?";
            const sqlPreparing = ['tipomantenimiento',idTipoMantenimiento];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return error;
        }
    }
}

module.exports = TipoMantenimientoModel;