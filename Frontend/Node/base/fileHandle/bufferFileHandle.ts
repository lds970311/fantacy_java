// @ts-ignore
import path from "path";
// @ts-ignore
import sharp from "sharp";
// @ts-ignore
import fs from "fs";
import ErrnoException = NodeJS.ErrnoException;

require("sharp")
require('path')

async function resizeImg() {
    // @ts-ignore
    const path = path.resolve(__dirname, "../../static/one.jpg")
    const destPath = path.resolve(__dirname, "../../static/two.jpg")
    // console.log(path)
    try {
        let resizeMsg = await sharp(path)
            .resize(300, 200)
            .toFile(destPath)
        console.log(resizeMsg)
    } catch (e) {
        console.log(e);
    }
}

// resizeImg()

function copyImg() {
    const srcPath = path.resolve(__dirname, "../../static/one.jpg")
    const destPath = path.resolve(__dirname, "../../static/three.jpg")
    sharp(srcPath)
        .rotate(90)
        .resize(1440, 720)
        .webp({
            quality: 100
        })
        .toBuffer()
        .then(data => {
            fs.writeFile(destPath, data, (res: ErrnoException | null) => {
                console.log(res);
            })
        })
}

copyImg()
