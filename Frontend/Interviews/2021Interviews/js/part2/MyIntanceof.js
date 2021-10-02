/**
 *   intanceof 操作符的实现原理及实现
 *   instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置
 */

function MyInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left)
    let prototype = right.prototype
    //判断构造函数的prototype是否在对象的原型链上
    while (true) {
        if (!proto) return false
        if (proto === prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

let arr = [1, 2, 3]

console.log(MyInstanceof(arr, RegExp))
