//路由引入
import userRouter from "./routers/userRouter";

import express, {Express} from "express";

const app: Express = express()

app.use("/user", userRouter)
    .use(express.json())
    .use(express.urlencoded())
    .listen(5789, "localhost", function () {
        console.log("server listening on port 5789")
    })
