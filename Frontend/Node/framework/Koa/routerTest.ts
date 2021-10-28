import userRouter from "./routers/user.router"
import goodsRouter from "./routers/goods.router"
import bodyParser from "koa-bodyparser";
import fileRouter from "./routers/file.router"

import Koa from "koa";

function startServer() {
    const app = new Koa()

    app
        .use(bodyParser())
        .use(userRouter.routes())
        .use(goodsRouter.routes())
        .use(userRouter.allowedMethods())
        .use(fileRouter.routes())
        .use(fileRouter.allowedMethods())
        .listen(5447, () => {
            console.log("server listening 5447")
        })
}

startServer()
