#!/usr/bin/ts-node
const pkg = require("./package.json")
// @ts-ignore
const program = require("commander")
// @ts-ignore
const helpCommander = require("./src/core/Help");
// @ts-ignore
const createCommand = require("./src/core/Create");
// @ts-ignore
const startProject = require('./src/core/StartProject')

//版本号
program.version(pkg.version, '-v, --version')

//帮助信息
helpCommander()

//创建工程命令
createCommand()

//启动项目
startProject()
    .then(() => console.log("项目启动成功"))
    .catch(err => console.log("项目启动失败", err));
program.parse(process.argv)


