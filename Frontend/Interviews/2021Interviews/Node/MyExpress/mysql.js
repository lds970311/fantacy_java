const mysql = require("mysql")
const client = mysql.createConnection({
    host: "192.168.1.111",
    user: "root",
    password: "19970311",
    database: "express",
    port: "3306"
})

module.exports = client