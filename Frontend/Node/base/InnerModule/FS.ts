/**
 * Node文件操作
 */
const fs = require("fs")
// @ts-ignore
const path = require("path")

const filePath = "./Path.ts"

function fsA(): void {
    //读取文件信息
    let stats = fs.statSync(filePath);
    console.log(stats);
    /**
     * Stats {
          dev: 608526645,
          mode: 33206,
          nlink: 1,
          uid: 0,
          gid: 0,
          rdev: 0,
          blksize: 4096,
          ino: 87375216640,
          size: 864,
          blocks: 512,
          atimeMs: 1634053132000,
          mtimeMs: 1634053132000,
          ctimeMs: 1240428288000,
          birthtimeMs: 1634052563600,
          atime: 2021-10-12T15:38:52.000Z,
          mtime: 2021-10-12T15:38:52.000Z,
          ctime: 2009-04-22T19:24:48.000Z,
          birthtime: 2021-10-12T15:29:23.600Z
        }
     */
    //异步操作
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(stats);
    })

    //promise方式获取文件信息
    fs.promises.stat(filePath).then(info => {
        console.log(info);
    }).catch(err => {
        console.log("read file err!", err)
    })
}


function fileDescriptor(): void {
    fs.open(filePath, (err, fd) => {
        if (err) {
            console.log(err);
            return
        }
        console.clear()
        console.log(fd) //3
        //根据文件描述符获取文件信息
        fs.fstat(fd, (err, info) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(info)
        })
    })
}

/**
 * 文件读写
 */

function write() {
    fs.writeFile("./write.txt", "hello world", {
        flag: 'a+'
    }, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })
}

function read() {
    fs.readFile(filePath, {
        encoding: 'utf8'
    }, (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
    })
}

/**
 * 文件夹操作
 */

function mkdir(): void {
    const myDir = "./My"
    if (!fs.existsSync(myDir)) {
        fs.mkdir(myDir, err => {
            if (err) {
                console.error(err)
                return
            }
        })
    }
}

function readdir() {
    const dir = path.resolve(__dirname)
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(files)
        fs.writeFile('./write.txt', files.toString(), (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(data)
        })
    })
}

function getAllFiles(dirName: string): void {
    fs.readdir(dirName, {
        withFileTypes: true
    }, (err, files) => {
        if (err) {
            console.error(err)
            return
        }
        files.forEach(file => {
            if (file.isDirectory()) {
                getAllFiles(path.resolve(dirName, file.name))
            } else {
                fs.writeFile("./write.txt", file.toString(), err => {
                    if (err) {
                        console.error(err)
                        return
                    }
                })
            }
        })
    })
}

function reName() {
    fs.rename("./write.txt", "new.txt", err => {
        if (!err) {
            console.log("rename success")
        } else {
            console.log(err)
        }
    });
}

// fsA()
// fileDescriptor()
// write()
// read()
// mkdir()
// readdir()

const filePaths: string = "G:\\Java\\fantacy_java\\Frontend\\Node"
//
//
// getAllFiles(filePaths)
reName()
