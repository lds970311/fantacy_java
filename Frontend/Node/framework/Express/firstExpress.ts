/**
 * 创建express服务
 */

import express, {Express} from 'express';


let app: Express = express()

function createExpressServer(): void {
    /* app.get('/', ((req, res, next) => {
         res.send('hello, express!')
         next()
     }))*/
    //祖册一个中间件
    app.use(((req, res, next) => {
        console.log("normal middleware")
        // res.send('middleware')
        next()
    }))
    app.use(((req, res, next) => {
        console.log("middleware 2")
        next()
    }))
    //路径匹配中间件
    app.use("/main", ((req, res, next) => {
        res.send('main')
        next()
    }))

    app.use("/main", ((req, res, next) => {
        console.log("main2")
        next()
    }))

    app.listen(6001, "localhost", function () {
        console.log("server started! port 6001")
    })
}

createExpressServer()
