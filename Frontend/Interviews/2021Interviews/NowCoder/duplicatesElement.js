/**
 * FED27 查找重复元素
 *      输入： [1, 2, 4, 4, 3, 3, 1, 5, 3]
 *      输出： [1, 3, 4]
 */

function duplicates(arr) {
    let times = {}
    for (let i = 0; i < arr.length; i++) {
        if (!times[arr[i]]) {
            times[arr[i]] = 1
        } else {
            times[arr[i]]++;
        }
    }
    let dArr = [];
    Object.keys(times).forEach(key => {
        if (times[key] >= 2) {
            dArr.push(Number(key))
        }
    })
    return dArr;
}

duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3])

