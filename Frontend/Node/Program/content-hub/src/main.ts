import app from "./app"
import config from "./app/config";

const createServer = () => {

    app.listen(config.APP_PORT, () => {
        console.log("server listening on port 12888")
    })
}

createServer()
