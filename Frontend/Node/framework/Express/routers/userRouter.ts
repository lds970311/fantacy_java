import * as core from "express-serve-static-core";
import {Router} from "express";

// @ts-ignore
const router: core.Router = new Router({
    caseSensitive: true,
    mergeParams: false,
    strict: true
})

const userRouter = (): Router => {
    router.get("/:id", (req, res) => {
        console.log("111")
        res.json({
            code: 200,
            status: "success"
        })
    })

    router.post("/", ((req, res) => {
        req.on("data", chunk => {
            console.log(chunk);
            res.json(chunk.toString())
        })
    }))
    return router
}

export default userRouter()
