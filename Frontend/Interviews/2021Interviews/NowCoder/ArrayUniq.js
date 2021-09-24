/**
 * 为 Array 对象添加一个去除重复项的方法
 */

Array.prototype.uniq = function () {
    return [...new Set(this)]
}

let arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
arr.uniq();

console.log(arr)