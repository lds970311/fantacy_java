import {Connection, createConnection} from 'mysql2'

const connection: Connection = createConnection({
    host: '192.168.208.144',
    port: 3306,
    user: 'root',
    password: '19970311',
    database: 'nodejs'
});

const statement = `INSERT INTO products SET ?;`
const phoneJson = require('./phone.json');

for (let phone of phoneJson) {
    connection.query(statement, phone);
}
console.log("insert end!")
