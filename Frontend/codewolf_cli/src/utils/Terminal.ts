/**
 * 执行终端命令相关函数
 */

const {exec, spawn} = require("child_process")

// @ts-ignore
const commandSpawn = function (): Promise<string | any> {
    return new Promise<string>((resolve, reject) => {
        const childProcess = spawn(...arguments)
        //显示打印信息
        childProcess.stdout.pipe(process.stdout)
        childProcess.stderr.pipe(process.stderr)
        //npm i 执行完成后, 通知主线程
        childProcess.on('close', () => {
            resolve("npm 安装结束!")
        })
        childProcess.on('error', () => {
            reject("npm install error")
        })
    })

}


module.exports = {
    commandSpawn
}
