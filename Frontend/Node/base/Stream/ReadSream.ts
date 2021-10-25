import path = require("path");
import fs = require("fs");
import {DS} from "../../@types/mytype";

const destPath = path.resolve(__dirname, "../../static/a.txt")

function createReadStream(): void {
    const reader: fs.ReadStream = fs.createReadStream(destPath, {
        mode: 0o755,
        start: 3,
        end: 14,
        highWaterMark: 10
    })
    // console.log(destPath)
    reader.on("data", (data: DS) => {
        //暂停读取
        reader.pause()
        setTimeout(() => {
            reader.resume()
        }, 1000)
        console.log(data);
    })
    //open事件
    reader.on("open", () => {
        console.log("file open")
    })

    reader.on("close", () => {
        console.log("file close")
    })
}

createReadStream()
