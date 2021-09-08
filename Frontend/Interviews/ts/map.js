function map(arr, callBack) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callBack(arr[i], i, arr));
    }
    return result;
}
function filter(arr, callBack) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
function reduce(callBack, arr, initialValue) {
    let result;
    if (initialValue) {
        result = initialValue;
    }
    else {
        result = arr[1];
    }
    for (let i = 0; i < arr.length; i++) {
        result = callBack(result, arr[i], i, arr);
    }
    return result;
}
const arr = [1, 2, 3, 4];
map(arr, item => {
    console.log(item);
});
console.log(filter(arr, item => {
    return item % 2 === 0;
}));
console.log(reduce((a, c) => {
    return a + c;
}, arr), 1);
arr.reduce((a, c) => {
    console.log(a, c);
    return a + c;
});
//# sourceMappingURL=map.js.map