/**
 * Node发送http请求
 */

import * as http from 'http';
import * as URL from "url";

function sendRequest(): Promise<string> {
    return new Promise((resolve, reject) => {
        http.get("http://iwenwiki.com/api/FingerUnion/data.json", res => {
            res.on("data", data => {
                let result = data.toString()
                resolve(result)
            })
            res.on("error", err => {
                reject(err)
            })
            res.on("end", () => {
                console.log("请求完毕!")
            })
        })
    })

}

function startServer(): void {
    http.createServer(async (req, res) => {
        const {pathname} = URL.parse(req.url!)
        if (pathname === "/home") {
            try {
                let sendData = await sendRequest()
                res.writeHead(200, {
                    "Content-Type": "application/json; charset=utf-8"
                })
                res.end(sendData)
            } catch (e) {
                res.writeHead(400)
                res.end("Server error: " + e)
            }
        }
    }).listen(13335, "localhost", () => {
        console.log("server listening on port 13335")
    })
}


startServer()
