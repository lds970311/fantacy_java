/**
 * 实现 add(1)(2)(3)
 */

function add(...args) {
    return args.reduce((a, b) => a + b)
}

function carry(fn) {
    let args = []

    return function temp(...newArgs) {
        if (newArgs.length) {
            args = [...args, ...newArgs]
            return temp
        } else {
            let val = fn.apply(this, args)
            args = [] //清空.为了下次调用
            return val
        }
    }
}

(function () {
    let carry1 = carry(add);
    let res = carry1(3)(4)(5)()
    console.log(res);
})()