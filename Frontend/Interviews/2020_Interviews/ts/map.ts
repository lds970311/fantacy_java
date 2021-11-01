//map
function map(arr: Array<unknown>, callBack: Function): Array<unknown> {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(callBack(arr[i], i, arr))
    }
    return result
}

function filter(arr: Array<unknown>, callBack: Function): Array<unknown> {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result;
}

function reduce(callBack: Function, arr: Array<unknown>, initialValue?: number): unknown {
    let result
    if (initialValue) {
        result = initialValue
    } else {
        result = arr[1]
    }
    for (let i = 0; i < arr.length; i++) {
        result = callBack(result, arr[i], i, arr)
    }
    return result;
}

// @ts-ignore
const arr = [1, 2, 3, 4]
map(arr, (item: number) => {
    console.log(item)
})


console.log(filter(arr, (item: number) => {
    return item % 2 === 0
}));


console.log(reduce((a: number, c: number) => {
    // console.log(a, c)
    return a + c
}, arr), 1);

arr.reduce((a, c) => {
    console.log(a, c)
    return a + c
})
