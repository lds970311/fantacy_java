/**
 * FED39 使用闭包
 * 实现函数 makeClosures，调用之后满足如下条件：
 1、返回一个函数数组 result，长度与 arr 相同
 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同

 输入：
 [1, 2, 3], function (x) {
	return x * x;
}
 输出：4
 */

function makeClosures(arr, fn) {
    let result = [];
    arr.forEach(item => {
        result.push(function (num) {
            return function () {
                return fn(num)
            }
        }(item))
    })
    return result;
}

//方式2
function mekeClosures2(arr, func) {
    const res = [];
    arr.forEach(item => {
        res.push(() => {
            return func(item)
        })
    })
    return res;
}


const closures = makeClosures([1, 2, 3], x => x * x);
console.log(closures[1]());

const closures2 = mekeClosures2([4, 5, 6], x => x * x);
console.log(closures2[0]())
console.log(closures2[1]())
console.log(closures2[2]())
