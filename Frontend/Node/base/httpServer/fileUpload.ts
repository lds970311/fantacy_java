/**
 * 原生http模块实现文件上传
 */

import * as http from "http"
import * as URL from "url";
import * as path from "path"
import {createWriteStream, rm} from "fs"

function fileUpload(): void {
    const server = http.createServer((request, response) => {
        const {pathname} = URL.parse(request.url!)
        const destPath = path.resolve(__dirname, "../../static/second.jpg")
        console.log(destPath)
        if (pathname?.trim() === "/upload") {
            if (request.method === "POST") {
                //开始上传
                console.log("starting upload")
                const writeStream = createWriteStream(destPath, {
                    flags: "w",
                    mode: 0o755
                })
                request.on("data", chunk => {
                    request.setEncoding("binary")
                    // console.log(chunk.toString().substr(-50))
                    writeStream.write(chunk, error => {
                        if (error) {
                            response.end(error)
                            return
                        }
                        response.end("upload complete")
                    })
                })
            }
        }
        if (request.method === "DELETE") {
            if (pathname?.trim() === "/rm") {
                rm(destPath, (err: NodeJS.ErrnoException | null) => {
                    if (err) {
                        response.end(err)
                        return
                    }
                    response.end("remove file success")
                })
            }
        }
    }).listen(13335, "localhost", () => {
        console.log("server listening on 13335")
    })
}

fileUpload()
