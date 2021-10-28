import Router from "koa-router";

function goodsRouter() {
    const router = new Router({
        prefix: "/goods"
    })

    router.get("/:id", ((context, next) => {
        console.log(context.params.id)
        context.response.body = `get ${context.params.id} goods`
    }))
    /*
        router.get("/name", (ctx: Context, next: Function) => {
            console.log(ctx)
            console.log(ctx.request.query)
            ctx.response.body = `get ${ctx.request.query} goods`
        })*/

    router.get("/", (ctx, next) => {
        console.log(ctx)
        console.log(ctx.request.query)
        ctx.response.body = ctx.request.query
    })

    router.delete("/:id", ((context, next) => {
        console.log(context.params.id)
        context.response.body = `delete ${context.params.id} goods`
    }))

    return router
}

export default goodsRouter()
