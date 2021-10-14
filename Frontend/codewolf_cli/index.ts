#!C:\Users\mechrevo\AppData\Roaming\npm\ts-node
const pkg = require("./package.json")
// @ts-ignore
const program = require("commander")
// @ts-ignore
const helpCommander = require("./src/core/Help");
// @ts-ignore
const createCommand = require("./src/core/Create");

//版本号
program.version(pkg.version, '-v, --version')

//帮助信息
helpCommander()

//创建工程命令
createCommand()
program.parse(process.argv)


