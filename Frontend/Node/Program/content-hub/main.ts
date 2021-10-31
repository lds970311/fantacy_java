import app from "./app/index"

const createServer = () => {

    app.listen(12888, () => {
        console.log("server listening on port 12888")
    })
}

createServer()
