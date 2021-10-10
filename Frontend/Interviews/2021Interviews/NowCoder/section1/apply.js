/**
 * FED42 使用 apply 调用函数
 *  描述
 实现函数 callIt，调用之后满足如下条件
 1、返回的结果为调用 fn 之后的结果
 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
 */


function callIt(fn) {
    const args = Array.prototype.slice.call(arguments, 1)
    console.log(args)
}

callIt(1, 2, 3, 4)


function partialUsingArguments(fn) {
    const args = Array.prototype.slice.call(arguments, 1)

    function result(a) {
        return fn.apply(null, [a].concat(args))
    }

    return result;
}

partialUsingArguments(() => {
    console.log()
})