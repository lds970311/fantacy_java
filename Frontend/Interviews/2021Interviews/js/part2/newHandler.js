/**
 * new 操作符的实现
 */

function objectFactory() {
    let newObj = null;
    let constructor = Array.prototype.shift.call(arguments)
    let result = null
    //判断参数是否是一个函数
    if (typeof constructor !== 'function') {
        console.error("type error: " + typeof constructor)
        return
    }
    //新建一个对象,对象的原型为构造函数的prototype
    newObj = Object.create(constructor.prototype)
    //将this指向新建对象,并执行函数
    result = constructor.apply(newObj, arguments)
    let flag = result && (typeof result === "object" || typeof result === "function")
    return flag ? result : newObj
}

const obj = objectFactory(function () {
    this.name = "xm"``
    this.age = 19
})

console.log(obj)
