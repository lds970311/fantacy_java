import * as mysql from "mysql2"

/**
 * 创建连接池
 */
const createPool = (): void => {
    const pool: mysql.Pool = mysql.createPool({
        connectTimeout: 1000,
        host: "192.168.208.144",
        password: "19970311",
        port: 3306,
        database: 'nodejs',
        user: "root",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    })
    const statement: string = "SELECT * FROM `products` where `price` > ? order by ? desc"
    pool.query(statement, [4000, "price"], (err, rows, fields) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(rows)
        pool.end();
    })
}

createPool()
