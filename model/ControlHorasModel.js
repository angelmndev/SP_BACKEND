const db = require('../config/db');

class ControlHorasModel{
    #idUsuarioFK;
    #idMaquinaFK;
    #chCantidadHoras;

    constructor(idUsuarioFK, idMaquinaFK, chCantidadHoras){    
        this.#idUsuarioFK = idUsuarioFK;
        this.#idMaquinaFK = idMaquinaFK;
        this.#chCantidadHoras = chCantidadHoras;
    }

    async AgregarControlHoras(){

        // const sqlSentenceTotaHoras = `SELECT sum(chCantidadHoras) as chTotalHora FROM ?? WHERE idMaquinaFK = ? AND chEstado = '1'`
        // const sqlPreparingTotalHoras = ['controlhoras',this.#idMaquinaFK];
        // const sql = await db.format(sqlSentenceTotaHoras,sqlPreparingTotalHoras);
        // const response = await db.query(sql);
        // const chTotalHora = response[0].chTotalHora == null ? this.#chCantidadHoras : response[0].chTotalHora;

       // console.log("total horas: ",chTotalHora);
        try {
            const sqlSentence = `INSERT INTO ?? SET ?`;
            const sqlPreparing = ['controlHoras',{             
                idUsuarioFK:this.#idUsuarioFK,             
                idMaquinaFK: this.#idMaquinaFK,
                chCantidadHoras: this.#chCantidadHoras,
                chEstado: '1'
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
        idControlHora,idUsuarioFK, chFecha, idMaquinaFK, chCantidadHoras,maqNombre,
        SUM(CASE WHEN idMaquinaFk = idMaquinaFK THEN chCantidadHoras ELSE 0 END) AS total,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '1' THEN chCantidadHoras ELSE 0 END) AS Domingo,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '2' THEN chCantidadHoras ELSE 0 END) AS Lunes,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '3' THEN chCantidadHoras ELSE 0 END) AS Martes,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '4' THEN chCantidadHoras ELSE 0 END) AS Miercoles,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '5' THEN chCantidadHoras ELSE 0 END) AS Jueves,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '6' THEN chCantidadHoras ELSE 0 END) AS Viernes,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '7' THEN chCantidadHoras ELSE 0 END) AS Sabado
        FROM
        ??
        JOIN maquinas on idMaquinaFK = idMaquina
        WHERE  YEARWEEK(chFecha) = YEARWEEK(CURDATE())
        GROUP BY idMaquinaFK
        `;

        const sqlPreparing = ['controlHoras'];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);
        console.log(response);
        return response;
    }

    static async ListarControlHorasPorFecha(fechaInicio,fechaFin,idMaquinaFK){
        
        console.log("Datos filter model: ",fechaInicio,fechaFin,idMaquinaFK)
        const sqlSentence = `SELECT
        idControlHora,idUsuarioFK, chFecha, idMaquinaFK, chCantidadHoras,maqNombre,
        SUM(CASE WHEN idMaquinaFk = idMaquinaFK THEN chCantidadHoras ELSE 0 END) AS total,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '1' THEN chCantidadHoras ELSE 0 END) AS Domingo,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '2' THEN chCantidadHoras ELSE 0 END) AS Lunes,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '3' THEN chCantidadHoras ELSE 0 END) AS Martes,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '4' THEN chCantidadHoras ELSE 0 END) AS Miercoles,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '5' THEN chCantidadHoras ELSE 0 END) AS Jueves,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '6' THEN chCantidadHoras ELSE 0 END) AS Viernes,
        SUM(CASE WHEN DAYOFWEEK(chFecha) = '7' THEN chCantidadHoras ELSE 0 END) AS Sabado
        FROM
        ??
        JOIN maquinas on idMaquinaFK = idMaquina
        WHERE chfecha between cast(? as date) and cast(? as date) and idMaquinaFK = ?
        GROUP BY idMaquinaFK`;
        const sqlPreparing = ['controlhoras',fechaInicio,fechaFin,idMaquinaFK];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);

        console.log(sql);
        console.log(response);

        return response;

        
        
    }
}

module.exports = ControlHorasModel;