import Router from "koa-router"

function userRouter() {
    const router = new Router({
        prefix: "/user"
    })
    router.get("/", ((context, next) => {
            context.response.body = "users"
        }
    ))

    router.put("/", ((context, next) => {
        context.response.body = "update user"
    }))
    return router
}

export default userRouter()
