const db = require('../config/db');

class ControlHorasModel{
    #chTotalHora;
    #idUsuarioFK;
    #chFecha;
    #idMaquinaFK;
    #chCantidadHoras;

    constructor(chTotalHora, idUsuarioFK, chFecha, idMaquinaFK, chCantidadHoras){    
        this.#chTotalHora = chTotalHora;        
        this.#idUsuarioFK = idUsuarioFK;
        this.#chFecha = chFecha;
        this.#idMaquinaFK = idMaquinaFK;
        this.#chCantidadHoras = chCantidadHoras;
    }

    async AgregarControlHoras(){
        console.log(this.#chFecha);
        try {
            const sqlSentence = `INSERT INTO ?? SET ?`;
            const sqlPreparing = ['controlHoras',{
                chTotalHora:this.#chTotalHora,
                idUsuarioFK:this.#idUsuarioFK,
                chFecha: this.#chFecha,
                idMaquinaFK: this.#idMaquinaFK,
                chCantidadHoras: this.#chCantidadHoras
            }]
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;

        } catch (error) {
            console.log(error);
            return error;
        }
    }

    static async ListarControlHoras(){
        const sqlSentence = `SELECT
        idControlHora, chTotalHora,idUsuarioFK, chFecha, idMaquinaFK, chCantidadHoras,maqNombre,
        MAX(CASE WHEN DAYOFWEEK(chFecha) = 1 THEN chCantidadHoras ELSE '' END) AS Domingo,
        MAX(CASE WHEN DAYOFWEEK(chFecha) = 2 THEN chCantidadHoras ELSE '' END) AS lunes,
        MAX(CASE WHEN DAYOFWEEK(chFecha) = 3 THEN chCantidadHoras ELSE '' END) AS Martes,
        MAX(CASE WHEN DAYOFWEEK(chFecha) = 4 THEN chCantidadHoras ELSE '' END) AS Miercoles,
        MAX(CASE WHEN DAYOFWEEK(chFecha) = 5 THEN chCantidadHoras ELSE '' END) AS Jueves,
        MAX(CASE WHEN DAYOFWEEK(chFecha) = 6 THEN chCantidadHoras ELSE '' END) AS Viernes,
        MAX(CASE WHEN DAYOFWEEK(chFecha) = 7 THEN chCantidadHoras ELSE '' END) AS Sabado
        FROM
        ??
        JOIN maquinas on idMaquinaFK = idMaquina
        WHERE  YEARWEEK(chFecha) = YEARWEEK(CURDATE())
        GROUP BY idMaquinaFK;
        `;

        const sqlPreparing = ['controlHoras'];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);
        console.log(response);
        return response;
    }
}

module.exports = ControlHorasModel;