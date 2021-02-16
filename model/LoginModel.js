const db = require('../config/db');

class LoginModel{

    static async showLogin(usuUsuario,usuPassword){
        console.log("model:",usuUsuario,usuPassword);
        const sqlSentence = "SELECT * FROM ?? WHERE usuUsuario=? AND usuPassword=?";
        const sqlPreparing = ['usuarios',usuUsuario,usuPassword];
        const sql = await db.format(sqlSentence,sqlPreparing);
        const response = await db.query(sql);
        
        return response;
    }
}

module.exports = LoginModel;