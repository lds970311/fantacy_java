const fs = require('fs');
const path = require("path")
const babylon = require('babylon')
const traverse = require('babel-traverse').default
const {transformFromAst} = require("babel-core")

/**
 * 首先我们传入一个文件路径参数，然后通过fs将文件中的内容读取出来
 接下来我们通过 babylon 解析代码获取AST ，目的是为了分析代码中是否还引入了别的文件
 通过dependencyList来存储文件中的依赖，然后再将AST转换为ES5代码
 最后函数返回了一个对象，对象中包含了当前文件路径、当前文件依赖和当前文件转换后的代码

 * @param filepath
 * @returns {{code: string, filepath, dependencyList: *[]}}
 */
function readCode(filepath) {
    const content = fs.readFileSync(filepath, 'utf8')
    //生成ast
    const ast = babylon.parse(content, {
        sourceType: 'module'
    })

    //寻找当前文件的依赖关系
    const dependencyList = [];
    traverse(ast, {
        ImportDeclaration: ({node}) => {
            dependencyList.push(node.source.value)
        }
    })

    //通过AST将代码转换为ES5
    const {code} = transformFromAst(ast, null, {
        presets: ['env']
    })
    return {
        filepath,
        dependencyList,
        code
    }
}

/**
 *调用readCode函数，传入入口文件分析入口文件的依赖
 识别JS和css文件

 首先我们读取入口文件，然后创建一个数组，该数组的目的是存储代码中涉及到的所有文件
 接下来我们遍历这个数组，一开始这个数组中只有入口文件，在遍历的过程中，如果入口文件有依赖其他的文件，那么就会被push到这个数组中
 在遍历的过程中，我们先获得该文件对应的目录，然后遍历当前文件的依赖关系
 在遍历当前文件依赖关系的过程中，首先生成依赖文件的绝对路径，然后判断当前文件是cSS文件还是 JS文件
 如果是CSS文件的话，我们就不能用Babel去编译了，只需要读取cSS文件中的代码，然后创建一个style标签，将代码插入进标签并且放入head中即可
 如果是JS文件的话，我们还需要分析JS文件是否还有别的依赖关系最后将读取文件后的对象push进数组中

 * @param entry
 */
function getDependencies(entry) {
    //读取入口文件
    const entryObject = readCode(entry)
    const dependencies = [entryObject]
    //遍历所有文件依赖关系
    for (const asset of dependencies) {
        //获取文件目录
        const dirname = path.dirname(asset.filepath)
        //遍历当前文件依赖关系
        asset.dependencyList.forEach(relativePath => {
            //获取绝对路径
            const absolutePath = path.join(dirname, relativePath)
            //判断是否是css文件
            if (/\.css$/.test(absolutePath)) {
                const content = fs.readFileSync(absolutePath, 'utf-8')
                const code = `
                    const style = document.createElement('style')
                    style.innerText = ${JSON.stringify(content).replace(/\\r\\n/g, '')
                }
                document.head.appendChild(style)
                `
                dependencies.push({
                    filepath: absolutePath,
                    relativePath: relativePath,
                    dependencies: dependencies,
                    code
                })
            } else {
                //js代码查找是否有依赖关系
                const child = readCode(absolutePath)
                child.relativePath = relativePath
                dependencies.push(child)
            }
        })
    }
    return dependencies
}

/**
 * 试下打包功能
 * @param dependencies
 * @param entry
 */
function bundle(dependencies, entry) {
    let modules = ""
    dependencies.forEach(dependency => {
        const filePath = dependency.relativePath || entry
        modules += `'${filePath}': (function(module,exports,require){${dependency.code}),`
    })
    //构建require函数
    const result = `
        (function(modules){
            function require(id){
                const module = {exports : {}}
                module[id](module,module.exports,require)
                return module.exports
            }
            require('${entry}')
        })(${modules})
    `
    fs.writeFileSync('./bundle.js', result)
}


let entry = "./test.js";

bundle(getDependencies(entry), entry)