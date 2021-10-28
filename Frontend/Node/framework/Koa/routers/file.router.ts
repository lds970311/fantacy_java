import Router from "koa-router";
import multer, {diskStorage} from "koa-multer";
import {IncomingMessage} from "http";
import {nanoid} from "nanoid";

const fileRouter = () => {
    const upload = multer({
        storage: diskStorage({
            destination: "../../static",
            filename(req: IncomingMessage, file: multer.File, callback: (error: (Error | null), filename: string) => void): void {
                callback(null, `${nanoid()}.jpg`)
            }
        })
    })
    const router = new Router({
        prefix: "/upload"
    })
    router.post("/", upload.single("file"), (ctx, next) => {
        console.log(ctx.req)
        ctx.response.body = "uploaded success"
    })
    return router
}

export default fileRouter()
