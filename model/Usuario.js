const db = require('../config/db');

class Usuario {
    #usuNombre = '';
    #usuApellido = '';
    #usuUsuario = '';
    #usuPassword = '';
    #usuEstado = '';    
    #idRolFK = 0;
    #idSedeFK = 0;

    constructor(usuNombre, usuApellido, usuUsuario, usuPassword, usuEstado, idRolFK, idSedeFK) {
        this.#usuNombre = usuNombre;
        this.#usuApellido = usuApellido;
        this.#usuUsuario = usuUsuario;
        this.#usuPassword = usuPassword;
        this.#usuEstado = usuEstado;
        this.#idRolFK = idRolFK;
        this.#idSedeFK = idSedeFK;                  
        
    }


    async createUser() {


         const sqlSentences = "INSERT INTO ?? SET ?";
          const sqlPreparing = ['usuarios',
              {
                
                usuNombre:this.#usuNombre,
                usuApellido:this.#usuApellido,
                usuUsuario: this.#usuUsuario,
                usuPassword:this.#usuPassword,
                usuEstado:this.#usuEstado, 
                idRolFK:this.#idRolFK,
                idSedeFK:this.#idSedeFK 
              }];
  
          const sql = await db.format(sqlSentences, sqlPreparing);
          const response = await db.query(sql);
          return response;
    }

    static async getUsers() {
        const sqlSentences = `
        SELECT * FROM usuarios JOIN rol on idRolFK = idRol`;

        const sql = await db.format(sqlSentences);
        const response = await db.query(sql);

        return response;
    }

    static async getUser(idUsuario) {
        const sqlSentences = `
        select idUsuario,fk_rol,nombreUsuario,nombreRol,nombrePersonalUsuario,apellidoPersonalUsuario,claveUsuario from usuario
        join rol
        on usuario.fk_rol = rol.idRol where idUsuario = ?`;

        const sqlPreparing = [idUsuario];
        const sql = await db.format(sqlSentences, sqlPreparing);
        const response = await db.query(sql);

        return response[0];
    }

    static async updateUser(idUsuario,
        { nombreUsuario,
            nombrePersonalUsuario,
            apellidoPersonalUsuario,
            fk_rol,
        }) {

        const sqlSentences = `UPDATE ?? 
        SET 
        nombreUsuario=?, 
        nombrePersonalUsuario=?,
        apellidoPersonalUsuario=?,
        fk_rol=?
        WHERE idUsuario=?`;


        const sqlPreparing = ["usuario",
            nombreUsuario,
            nombrePersonalUsuario,
            apellidoPersonalUsuario,
            fk_rol,
            idUsuario];

        const sql = await db.format(sqlSentences, sqlPreparing);
        const response = await db.query(sql);

        return response;

    }

    static async deleteUser(idUsuario) {

        //delete de usuario
        const slqSentences = "DELETE FROM ?? WHERE idUsuario=?";
        const sqlPreparing = ["usuario", idUsuario];

        const sql = await db.format(slqSentences, sqlPreparing);
        const response = await db.query(sql);


        return response
    }
    static async validarUsuario(nombreUsuario) {
        try {
            const sqlSentence = "SELECT idUsuario,nombreUsuario,claveUsuario,idRol,nombreRol FROM ?? INNER JOIN rol ON usuario.fk_rol=rol.idRol  WHERE ?? = ?"
            const sqlPreparing = ['usuario', 'nombreUsuario', nombreUsuario]
            const sql = await db.format(sqlSentence, sqlPreparing)
            const responseDb = await db.query(sql)
            const response = responseDb[0]

            return response

        } catch (error) {
            return error
        }
    }

    static async changeUserPassword(idUsuario, newPassword) {
        console.log(idUsuario, newPassword);

        try {
            const sqlSentences = `UPDATE ?? 
            SET  
            claveUsuario=?
            WHERE idUsuario=?`;

            const sqlPreparing = ["usuario",
                newPassword,
                idUsuario];

            const sql = await db.format(sqlSentences, sqlPreparing);
            const response = await db.query(sql);

        } catch (error) {

        }

    }
}


module.exports = Usuario;