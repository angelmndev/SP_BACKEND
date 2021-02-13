const mysql = require('mysql')
const { promisify } = require('util')

class Mysql {
    constructor() {
        this.conectar()
    }
    conectar() {
        const connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            port: process.env.PORT_DB
        });

        connection.connect((err) => {
            if (err) {
                console.log(new Error(err));
            } else {
                console.log("conectado con exito a la db");
            }

        })

        connection.on("err", (err) => {
            if (err) console.log(err);

        })
        connection.query = promisify(connection.query)
        return connection
    }
}

let dataBase = new Mysql()



module.exports = dataBase.conectar();
