import Koa from 'koa';


const createKoaServer = () => {
    const app = new Koa()
    //创建一个接口
    app.use(((ctx, next) => {
        const {request, response} = ctx;
        ctx.response.body = "Hello World"
    }))

    app.listen(5621, "localhost", () => {
        console.log("server listening on port 5621")
    })
}
createKoaServer()
