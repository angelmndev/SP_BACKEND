const db = require('../config/db');

class OrdenTrabajoModel {
    #otNumeroOrden = ''; 
    #otFecha = ''; 
    #idSedeFK = '';
    #idAreaCultivoFK = ''; 
    #otTiempoEstimado = '';
    #otHoraInicio = ''; 
    #otHoraFin = ''; 
    #idUsuarioSupervisorFK = '';
    #idUsuarioPersonalFK = '';
    #idMaquinaFK = '';


    constructor(otNumeroOrden, otFecha, idSedeFK, idAreaCultivoFK, otTiempoEstimado, otHoraInicio, otHoraFin, idUsuarioSupervisorFK, idUsuarioPersonalFK, idMaquinaFK) {   
        this.#otNumeroOrden = otNumeroOrden; 
        this.#otFecha = otFecha; 
        this.#idSedeFK = idSedeFK;
        this.#idAreaCultivoFK = idAreaCultivoFK; 
        this.#otTiempoEstimado = otTiempoEstimado;
        this.#otHoraInicio = otHoraInicio; 
        this.#otHoraFin = otHoraFin; 
        this.#idUsuarioSupervisorFK = idUsuarioSupervisorFK;
        this.#idUsuarioPersonalFK = idUsuarioPersonalFK;
        this.#idMaquinaFK = idMaquinaFK;
    }

    async AgregarOrdenTrabajo() {
        try {
            const sqlSentence = "INSERT INTO ?? SET ?";
            const sqlPreparing = ['ordentrabajo', {
                otNumeroOrden: this.#otNumeroOrden,
                otFecha: this.#otFecha,                
                idSedeFK: this.#idSedeFK,
                idAreaCultivoFK: this.#idAreaCultivoFK,
                otTiempoEstimado: this.#otTiempoEstimado,
                otHoraInicio: this.#otHoraInicio,
                otHoraFin: this.#otHoraFin,
                idUsuarioSupervisorFK: this.#idUsuarioSupervisorFK,
                idUsuarioPersonalFK: this.#idUsuarioPersonalFK,
                idMaquinaFK: this.#idMaquinaFK
            }]
            const sql = await db.format(sqlSentence, sqlPreparing);
            const response = await db.query(sql);

            return response;

        } catch (error) {
            return error;
        }
    }


    static async ListarOrdenTrabajo() {
        try {
            const sqlSentence = "SELECT * FROM ??"
            const sqlPreparing = ['ordenTrabajo'];
            const sql = await db.format(sqlSentence, sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            return error;
        }
    }

    static async ObtenerNumeroOrdenTrabajo(){
        try {
            const sqlSentence = "SELECT LPAD(otNumeroOrden,6,'0') as  otNumeroOrden FROM ?? GROUP BY otNumeroOrden desc LIMIT 1";
            const sqlPreparing = ['ordentrabajo'];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);
            let numeroOrden = response[0].otNumeroOrden;
            if(numeroOrden == null){
                numeroOrden = 1;
            }

            console.log("model orden trabajo");
            console.log(numeroOrden)

            return numeroOrden;
        } catch (error) {    
            return error;
        }
    }

}

module.exports = OrdenTrabajoModel;