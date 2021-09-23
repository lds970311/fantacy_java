const express = require('express');

const app = express();

const url = require("url")
const router = require('./router')

const client = require("./mysql")
app.use('/', router)

app.get("/", (req, res, next) => {
    res.send({
        name: "lee",
        age: 21
    })
})

app.get('/mysql', ((req, res, next) => {
    const sql = "select * from user_info";
    client.query(sql, (err, result) => {
        if (err) return;
        console.log(result)
        res.send(result)
    })
}))

app.listen(3889, () => {
    console.log("start success")
})