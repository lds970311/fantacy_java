function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true
        }
    }
    return false
}

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, arr)) {
            return false
        }
    }
    return true
}

let arr = [1, 2, 3]
let res = some(arr, item => {
    return item % 2 === 0;
})
let arr2 = [2, 4, 6]

console.log(res);

let res2 = every(arr2, item => {
    return item % 2 === 0;
})
console.log(res2);