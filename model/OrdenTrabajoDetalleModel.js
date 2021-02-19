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

    async AgregarOrdenTrabajoDetalle(){
        try {
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

}

module.exports  = OrdenTrabajoDetalleModel;