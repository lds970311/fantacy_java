/**
 * 一般中间件的使用
 */

import express, {Express} from 'express'

const app: Express = express()

function useMiddleWare() {
    app.use(((req, res, next) => {
        console.log("start use")
        next();
    }))

    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.post("/msg", ((req, res, next) => {
        res.setHeader("Content-Type", "application/json;charset=utf8")
        req.on("data", data => {
            req.body = JSON.parse(data.toString())
            console.log(req.body)
        })
        res.send(req.body)
        req.on("end", () => {
            next()
        })
    }))
    app.listen(4531, "localhost", () => {
        console.log("server listening 4531")
    })
}

useMiddleWare()
