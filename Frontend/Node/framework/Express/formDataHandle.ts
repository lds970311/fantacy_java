/**
 * 处理form-data
 */

import express from "express";
import e, {Express} from "express";
import multer, {Multer} from "multer";
import {nanoid} from 'nanoid'

const app: Express = express()

//磁盘存储引擎可以完全控制将文件存储到磁盘
const storage = multer.diskStorage({
    destination: "../../static",
    filename(req: e.Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void): void {
        callback(null, `${nanoid()}.jpg`)
    }
})
const upload: Multer = multer({
    storage: storage
})

function uploadFile(): void {
    app.use(express.json())
    app.use(express.urlencoded())
    app.post('/upload', upload.array('file', 5), ((req, res, next) => {
            // console.log(req.body)
            console.log(req.file)
            res.send("file upload success")
        }
    ))
    app.listen(5432, "localhost", () => {
        console.log("server listening on 5432!")
    })
}

uploadFile()
