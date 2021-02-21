const db = require('../config/db');

class MantPreventivoModel{
    #idMaquinaFK;
    #idSistemaFK;
    #idComponenteFK;
    #mpTarea;
    #idTipoMantenimientoFK;
    #mpFrecuenciaHoras;
    #mpRiesgoIdentificado;
    #mpNivelRiesgo;
    #idUsuarioFK;


    constructor(idMaquinaFK, idSistemaFK, idComponenteFK, mpTarea, idTipoMantenimientoFK, mpFrecuenciaHoras, mpRiesgoIdentificado, mpNivelRiesgo, idUsuarioFK){
        this.#idMaquinaFK = idMaquinaFK;
        this.#idSistemaFK = idSistemaFK;
        this.#idComponenteFK = idComponenteFK;
        this.#mpTarea = mpTarea;
        this.#idTipoMantenimientoFK = idTipoMantenimientoFK;
        this.#mpFrecuenciaHoras = mpFrecuenciaHoras;
        this.#mpRiesgoIdentificado = mpRiesgoIdentificado;
        this.#mpNivelRiesgo = mpNivelRiesgo;
        this.#idUsuarioFK = idUsuarioFK;
    }

    /* Mantenimiento preventivo insertar */
    async AgregarMantPreventivo(){

        //Obteniendo Horas Acumuladas
        /*******************************************************************************************/
        const sqlSentenceHA = "SELECT SUM(chCantidadHoras) AS mpHorasAcumuladas FROM ?? WHERE idMaquinaFK = ? AND chEstado = '1' GROUP BY idMaquinaFk";
        const sqlPreparingHA = ['controlhoras',this.#idMaquinaFK];
        const sqlHA = await db.format(sqlSentenceHA,sqlPreparingHA);
        const responseHA = await db.query(sqlHA);
        const mpHorasAcumuladas = responseHA[0].mpHorasAcumuladas;
        /*******************************************************************************************/
        console.log("Horas acumuladas: ",mpHorasAcumuladas)
        //Obteneindo fecha detalle 
        /*******************************************************************************************/
        let restante = this.#mpFrecuenciaHoras - mpHorasAcumuladas;
        let MPFecha = '';
        if(restante<24){
            MPFecha = "MAÑANA";
        }else{
            MPFecha = "OPERATIVO"
        }
        console.log("restante: ",restante);
        /*******************************************************************************************/
        
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
                mpHorasAcumuladas: mpHorasAcumuladas,
                mpStatus: restante,
                mpFecha: MPFecha,
                mpRiesgoIdentificado: this.#mpRiesgoIdentificado,
                mpNivelRiesgo: this.#mpNivelRiesgo,
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
            SELECT
            idMantenimientoPreventivo,maqNombre,sisNombre,comNombre,
            mpTarea,tmNombre,mpFrecuenciaHoras,mpHorasAcumuladas,mpStatus,
            mpfecha,mpRiesgoIdentificado
            FROM matenimientopreventivo
            JOIN maquinas ON idMaquinaFK = idMaquina
            JOIN sistemas ON idSistemaFK = idSistema
            JOIN componentes ON idComponenteFK = idComponente
            JOIN tipoMantenimiento ON idTipoMantenimientoFK = idTipoMaNtenimiento       
        `;
        const sqlPreparing = ['matenimientoPreventivo'];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);

        return response;
    }

    static async ListarMantPreventivoFiltrado(idMaquinaFK, mpFecha, idTipoMantenimientoFK){        
        try {
            const sqlSentence = `
            SELECT idMantenimientoPreventivo,idMaquinaFK,maqNombre,idSistemaFK,sisNombre,idComponenteFK,idTipoMantenimientoFK,comNombre,mpTarea 
            FROM ??
            JOIN maquinas ON idMaquinaFK = idMaquina
            JOIN sistemas ON idSistemaFK = idSistema
            JOIN componentes ON idComponenteFK = idComponente
            JOIN tipoMantenimiento ON idTipoMantenimientoFK = idTipoMantenimiento
            WHERE idMaquinaFK = ?  AND mpFecha = ? OR idTipoMantenimientoFK = ?
            `;
            const sqlPreparing = ['matenimientopreventivo', idMaquinaFK, mpFecha, idTipoMantenimientoFK];
            const sql = await db.format(sqlSentence,sqlPreparing);
            const response = await db.query(sql);

            return response;
        } catch (error) {            
            return error;
        }
    }
    

}

module.exports = MantPreventivoModel;