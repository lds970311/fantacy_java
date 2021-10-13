// @ts-ignore
const path = require('path')

function testA(): void {
    //获取路径信息
    // resolve会判断拼接的路径字符串中,是否有以/或./或../开头的路径
    const currentPath: string = path.resolve(__dirname, __filename)
    console.log(currentPath) //G:\Java\fantacy_java\Frontend\Node\base\InnerModule\Path.ts
}

function testB(): void {
    const filePaths: string = "G:\\Java\\fantacy_java\\Frontend\\Node"
    //获取文件名
    console.log(path.basename(filePaths)) //Path.ts
    //获取后缀名
    console.log(path.extname(filePaths)) //.ts
}

function testC(): void {
    const filePath1: string = "G:\\Java\\fantacy_java"
    const filePath2: string = "Frontend\\Node\\base\\InnerModule\\Path.ts"
    const res = path.join(filePath1, filePath2)
    console.log(res);
}

testC()
