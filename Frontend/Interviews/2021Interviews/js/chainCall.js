/**
 * 实现add(1)(2)(3)
 */

function add(num) {
    let args = []
    args.push(num)
    return function () {
        args.push(arguments)
        return args.reduce((a, b) => a + b)
    }
}

let arr = [1, 2, 3, 4, 5]

arr.splice(3, 1, "a", "b")
console.log(arr);

console.log(arr.reduce((a, b) => {
    return a > b
}))
