const db = require('../config/db');

class OrdenTrabajoDetalleModel{
    #idSistemaFK = ''; 
    #idComponenteFK = '';
    #idTipoMantenimientoFK = '';
    #otdTareas = '';
    #otdEjecutado = '';
    #otdObservacion = '';
    #idMantenimientoPreventivoFK = '';
    #idOrdenTrabajoFK = '';

    constructor(idSistemaFK, idComponenteFK, idTipoMantenimientoFK, otdTareas, otdEjecutado, otdObservacion, idMantenimientoPreventivoFK, idOrdenTrabajoFK){
        this.#idSistemaFK = idSistemaFK;
        this.#idComponenteFK = idComponenteFK;
        this.#idTipoMantenimientoFK = idTipoMantenimientoFK;
        this.#otdTareas = otdTareas;
        this.#otdEjecutado = otdEjecutado;
        this.#otdObservacion = otdObservacion;
        this.#idMantenimientoPreventivoFK = idMantenimientoPreventivoFK;
        this.#idOrdenTrabajoFK = idOrdenTrabajoFK;
    }

    async AgregarOrdenTrabajoDetalless(){
        try {

            const sqlSentenceOT = "SELECT * FROM ?? ORDER BY idOrdenTrabajo DESC LIMIT 1"
            const sqlPreparingOT = ['ordentrabajo'];
            const sqlOT = await db.format(sqlSentenceOT,sqlPreparingOT);
            const respponseOT = await db.query(sqlOT);

            this.#idOrdenTrabajoFK = respponseOT[0].idOrdenTrabajo;

            console.log("Model::", this.#idOrdenTrabajoFK);

            const sqlSentence = "INSERT INTO ?? SET ?";
            const sqlPreparing = ['ordentrabajodetalle',{
                idSistemaFK:this.#idSistemaFK,
                idComponenteFK: this.#idComponenteFK,
                idTipoMantenimientoFK: this.#idTipoMantenimientoFK, 
                otdTareas: this.#otdTareas,
                otdEjecutado: this.#otdEjecutado,
                otdObservacion: this.#otdObservacion,
                idMantenimientoPreventivoFK: this.#idMantenimientoPreventivoFK,
                idOrdenTrabajoFK: this.#idOrdenTrabajoFK
            }]

            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);
            return response;
        } catch (error) {
            return error;
        }
    }

    static async AgregarOrdenTrabajoDetalle (data){
        try {
            console.log("data modl:::",data);
            const sqlSentenceOT = "SELECT * FROM ?? ORDER BY idOrdenTrabajo DESC LIMIT 1"
            const sqlPreparingOT = ['ordentrabajo'];
            const sqlOT = await db.format(sqlSentenceOT, sqlPreparingOT);
            const respponseOT = await db.query(sqlOT);

            const idOrdenTrabajo = respponseOT[0].idOrdenTrabajo;

            console.log("Model::", idOrdenTrabajo);      
            for(let i = 0; i< data.length;i++){
                console.log("for model:::::::::::::")
                let element = data[i];
                const sqlSentence = "INSERT INTO ?? SET ?";
                const sqlPreparing = ['ordentrabajodetalle', {
                    idSistemaFK: element.idSistemaFK,
                    idComponenteFK: element.idComponenteFK,
                    idTipoMantenimientoFK: element.idTipoMantenimientoFK,
                    otdTareas: element.otdTareas,
                    otdEjecutado: element.otdEjecutado,
                    otdObservacion: element.otdObservacion,
                    idMantenimientoPreventivoFK: element.idMantenimientoPreventivoFK,
                    idOrdenTrabajoFK: idOrdenTrabajo,
                    otdEstado: '-'
                }]

                const sql = await db.format(sqlSentence, sqlPreparing);
                const response = await db.query(sql);
                if (response){
                    console.log("Se inserto")
                }
            }            

            
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    static async ListarOrdenTrabajoDetalle(){
        const sqlSentence = `
        SELECT idSistemaFK,sisNombre,idComponenteFK,comNombre,otdTareas,otdEjecutado,otdObservacion FROM ordentrabajodetalle
        JOIN sistemas ON idSistemaFK = idSistema
        JOIN componentes ON idComponenteFK = idComponente
        `;
        const sqlPreparing = ['ordentrabajodetalle'];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);
        return response;
    }

    static async ListarOrdenTrabajoDetallePorNumero(numeroOrden){
        const sqlSentence = `
        SELECT
        idOrdenTrabjoDetalle,idSistemaFK,sisNombre,idComponenteFK,comNombre,otdTareas,otdEjecutado,otdObservacion
        FROM ??
        JOIN ordenTrabajo ON idOrdenTrabajoFk = idOrdenTrabajo
        JOIN sistemas ON idSistemaFk = idSistema
        JOIN componentes ON idComponenteFK = idComponente
        WHERE otNumeroOrden = ? AND otdEstado = '-'
        `
        const sqlPreparing = ['ordentrabajodetalle',numeroOrden];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);

        return response;
    }

    static async AgregarEjecutadoObservacion(otdEjecutado,otdObservacion,idOrdenTrabjoDetalle){
        const sqlSentence = "UPDATE ?? SET otdEjecutado = ? , otdObservacion = ?, otdEstado='1' WHERE idOrdenTrabjoDetalle = ?";
        const sqlPreparing = ['ordentrabajodetalle',otdEjecutado,otdObservacion,idOrdenTrabjoDetalle];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql)
        return response;
    }
}

module.exports  = OrdenTrabajoDetalleModel;