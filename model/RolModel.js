const db = require('../config/db');

class RolModel{
    #rolNombre;

    constructor(rolNombre){
        this.#rolNombre = rolNombre;
    }

    /* Agregar un nuevo rol */
    async AgregarRol(){
        console.log(this.#rolNombre);
        try{
            const sqlSentence = 'INSERT INTO ?? SET ?';
            const sqlPreparing = ['rol',{
                rolNombre:this.#rolNombre
            }];

            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);
            
            return response;
        }catch(error){
            return error;
        }
    }


    /* Obntener registro de rol */
    static async ListarRol(){
        const sqlSentence = `SELECT * FROM ??`;
        const sqlPreparing = [`rol`];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);

        return response;
    }

    /* Modificar rol */
    static async SeleccionarRol(idRol){
        const sqlSentence = 'SELECT * FROM ?? WHERE idRol = ?';
        const sqlPreparing = ['rol',idRol];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);

        return response;
    }

    static async ModificarRol(idRol,rolNombre){
        const sqlSentence = 'UPDATE ?? SET rolNombre = ? WHERE idRol = ?';
        const sqlPreparing = ['rol',rolNombre,idRol];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = db.query(sql);

        return response;
    }
}

module.exports = RolModel;