/**
 * FED25 添加元素
 *  在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
 *      输入： [1, 2, 3, 4], 'z', 2
 *      输出： [1, 2, 'z', 3, 4]
 */

function insert(arr, item, index) {
    let newArray = [...arr];
    for (let i = arr.length; i >= index; i--) {
        newArray[i] = arr[i - 1];
    }
    newArray[index] = item;
    return newArray
}

const res = insert([1, 2, 3, 4], 'z', 2);
console.log(res);