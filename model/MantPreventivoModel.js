const db = require('../config/db');

class MantPreventivoModel{
    #idMaquinaFK;
    #idSistemaFK;
    #idComponenteFK;
    #mpTarea;
    #idTipoMantenimientoFK;
    #mpFrecuenciaHoras;
    #mpHorasAcumuladas;
    #mpStatus;
    #mpFecha;
    #mpRiesgoIdentificado;
    #idUsuarioFK;

    constructor(idMaquinaFK, idSistemaFK, idComponenteFK, mpTarea, idTipoMantenimientoFK, mpFrecuenciaHoras, mpHorasAcumuladas, mpStatus, mpFecha, mpRiesgoIdentificado, idUsuarioFK){
        this.#idMaquinaFK = idMaquinaFK;
        this.#idSistemaFK = idSistemaFK;
        this.#idComponenteFK = idComponenteFK;
        this.#mpTarea = mpTarea;
        this.#idTipoMantenimientoFK = idTipoMantenimientoFK;
        this.#mpFrecuenciaHoras = mpFrecuenciaHoras;
        this.#mpHorasAcumuladas = mpHorasAcumuladas;
        this.#mpStatus = mpStatus;
        this.#mpFecha = mpFecha;
        this.#mpRiesgoIdentificado = mpRiesgoIdentificado;
        this.#idUsuarioFK = idUsuarioFK;
    }

    /* Mantenimiento preventivo insertar */
    async AgregarMantPreventivo(){
        console.log("============Model============");
        console.log(this.#idUsuarioFK);
        try {
            const sqlSentence = 'INSERT INTO ?? SET ?';
            const sqlPreparing = ['matenimientoPreventivo',{
                idMaquinaFK: this.#idMaquinaFK,
                idSistemaFK: this.#idSistemaFK,
                idComponenteFK: this.#idComponenteFK,
                mpTarea: this.#mpTarea,
                idTipoMantenimientoFK: this.#idTipoMantenimientoFK,
                mpFrecuenciaHoras: this.#mpFrecuenciaHoras,
                mpHorasAcumuladas: this.#mpHorasAcumuladas,
                mpStatus: this.#mpStatus,
                mpFecha: this.#mpFecha,
                mpRiesgoIdentificado: this.#mpRiesgoIdentificado,
                idUsuarioFK: this.#idUsuarioFK
            }]
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    static async ListarAgregarMantPreventivo(){
        const sqlSentence = `
            SELECT maqNombre,sisNombre,comNombre,mpTarea,tmNombre,mpFrecuenciaHoras,mpHorasAcumuladas,mpStatus,mpfecha,mpRiesgoIdentificado FROM ??
            JOIN maquinas ON idMaquinaFK = idMaquina
            JOIN sistemas ON idSistemaFK = idSistema
            JOIN componentes ON idComponenteFK = idComponente
            JOIN tipoMantenimiento ON idTipoMantenimientoFK = idTipoMantenimiento
            JOIN usuarios ON idUsuarioFK = idUsuario        
        `;
        const sqlPreparing = ['matenimientoPreventivo'];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);

        return response;
    }

}

module.exports = MantPreventivoModel;