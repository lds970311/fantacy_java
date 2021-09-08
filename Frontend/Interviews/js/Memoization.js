//REACT.memo实现原理: memoization

let fibonacci = (function () {
    let memory = {}    //memory设定为对象
    return function (n) {
        if (memory[n] !== undefined) {
            return memory[n]
        }
        return memory[n] = (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2)
    }
})()

console.log(fibonacci(5));