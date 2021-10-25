import * as http from 'http'


function createServer(): void {
    const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
        console.log(req.headers)
        res.end("123456")
    })
    server.listen(13331, 'localhost', () => {
        console.log("server started success")
    })
}

createServer()
