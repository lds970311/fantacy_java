const babel = require('@babel/core')
//类型判断，生成AST零部件
const types = require('babel-types')

// 源代码
const code = `class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        return this.name;
    }
}`

const visitor = {
    ClassDeclaration(path) {
        let node = path.node; //当前节点
        let id = node.id;   //节点id
        let methods = node.body.body; // 方法数组
        let constructorFunction = null; // 构造方法
        let functions = []; // 目标方法

        methods.forEach(method => {
            //如果是构造方法
            if (method.kind === 'constructor') {
                constructorFunction = types.functionDeclaration(id, method.params, method.body, false, false);
                functions.push(constructorFunction)
            } else {
                //普通方法
                let memberExpression = types.memberExpression(types.memberExpression(id, types.identifier('prototype'), false), method.key, false);
                let functionExpression = types.functionExpression(null, method.params, method.body, false, false);
                let assignmentExpression = types.assignmentExpression('=', memberExpression, functionExpression);
                functions.push(types.expressionStatement(assignmentExpression));
            }
        })
        //判断，replaceWithMultiple用于多重替换
        if (functions.length === 1) {
            path.replaceWith(functions[0])
        } else {
            path.replaceWithMultiple(functions)
        }
    }
}

let result = babel.transform(code, {
    plugins: [
        {
            visitor
        }
    ]
})

console.log(result.code)
