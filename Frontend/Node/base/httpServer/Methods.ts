import * as http from "http";
import * as URL from "url";
import * as qs from "querystring"


function methods() {
    const server = http.createServer(((req, res) => {
        const {pathname, query} = URL.parse(req.url!)
        console.log(req.headers)
        const queryObj = qs.parse(query!)
        if (pathname === '/login') {
            if (req.method === 'GET') {
                //获取body数据, 默认以readStream的形式传递
                req.on("data", chunk => {
                    let data = JSON.parse(chunk.toString())
                    console.log(data)
                })
                res.writeHead(200, {
                    "Content-type": "text/html;charset=utf8"
                })
                res.end(`
                    <h1>this is a title</h1>
                `)
            }
        }
    }))

    server.listen(13334, "localhost", () => {
        console.log("server started on port 13334")
    })
}


methods()
