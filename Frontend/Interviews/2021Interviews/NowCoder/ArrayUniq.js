/**
 * 为 Array 对象添加一个去除重复项的方法
 */

let unique = (input) => {
    let res = []
    res = input.reduce((item, pre) => {
        console.log(item, pre)
        if (JSON.stringify(item).indexOf(JSON.stringify(pre)) === -1) {
            return [...item, pre]
        } else {
            return item
        }
    }, res)

    return res
}

const unique2 = input => {
    let res = []
    input.forEach(item => {
        if (JSON.stringify(res).indexOf(item) === -1) {
            res.push(item)
        }
    })
    return res
}

let a = unique2([1, "a", {b: 2}, {c: 3}, {b: 2}, "1", "a"])
console.log(a);

/*
let arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
arr.uniq();

console.log(arr)*/
