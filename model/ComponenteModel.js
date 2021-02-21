const nodemon = require('nodemon');
const db = require('../config/db');

class ComponenteModel{
    #comNombre='';


    constructor(comNombre){
        this.#comNombre = comNombre;
    }

    async AgregarComponentes(){
        try {
            const sqlSentence = "INSERT INTO ?? SET ?";
            const sqlPreparing = ['componentes',{
                comNombre: this.#comNombre
            }]
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);
            return response;

        } catch (error) {
            return error;
        }
    }


    static async ListarComponentes(){
        const sqlSentence = "SELECT * FROM ??";
        const sqlPreparing = ['componentes'];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);

        return response;
    }


    static async SeleccionarComponentes(idComponente){
        try {
            const sqlSentence = "SELECT * FROM ?? WHERE idComponente = ?";
            const sqlPreparing = ['componentes',idComponente];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);
    
            return response;
        } catch (error) {
            return error;
        }
      
    }

    static async ModificarComponentes(componente){
        try {
            const {idComponente, comNombre, comTiempoVida} = componente;
            const sqlSentence = "UPDATE ?? SET comNombre = ?, comTiempoVida = ?  WHERE idComponente = ?";
            const sqlPreparing = ['componentes',comNombre,comTiempoVida,idComponente];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return error;
        }
    }
}


module.exports = ComponenteModel;