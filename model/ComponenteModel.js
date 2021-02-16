const nodemon = require('nodemon');
const db = require('../config/db');

class ComponenteModel{
    #comNombre='';
    #comTiempoVida = '';


    constructor(comNombre, comTiempoVida){
        this.#comNombre = comNombre;
        this.#comTiempoVida = comTiempoVida;
    }


    static async ListarComponentes(){
        const sqlSentence = "SELECT * FROM ??";
        const sqlPreparing = ['componentes'];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);


        return response;
    }
}


module.exports = ComponenteModel;