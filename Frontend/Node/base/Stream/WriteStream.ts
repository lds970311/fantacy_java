import path = require("path");
import fs = require("fs");
import {error} from "../../@types/mytype";

const destPath = path.resolve(__dirname, "../../static/b.txt")

function createWriteStream(): void {
    const writeStream: fs.WriteStream = fs.createWriteStream(destPath, {
        encoding: "utf8",
        flags: "w+",
        start: 4

    })
    writeStream.write("你好", (err: error) => {
        if (err) {
            console.log("error!", err)
            return
        }
        console.log("success")
    })
    //手动关闭文件
    writeStream.close()
    writeStream.on("close", () => {
        console.log("writeStream closed")
    })
}

createWriteStream()
