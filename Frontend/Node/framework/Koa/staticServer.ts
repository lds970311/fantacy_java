import Koa from "koa";
import server from "koa-static"

const createStatic = () => {
    const app = new Koa()

    app.use(server(__dirname + '/build'))
    app.listen(5793, () => {
        console.log("static server listening on port 5763")
    })
}

createStatic()
