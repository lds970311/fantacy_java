//map
function map<T>(arr: T[], callBack: (item: T, index?: number, array?: Array<T>) => any): T[] {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(callBack(arr[i], i, arr))
    }
    return result
}

function filter<T>(arr: T[], callBack: (item: T, index?: number, array?: Array<T>) => boolean): T[] {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result;
}

function reduce<T>(callBack: (pre: T, curr: T, currIndex: number, initialValue: any) => any, arr: T[], initialValue?: any): any {
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


const arr1 = [1, 2, 3, 4]
map<number>(arr1, item => {
    console.log(item)
})


console.log(filter(arr1, (item: number) => {
    return item % 2 === 0
}));


console.log(reduce((a: number, c: number) => {
    // console.log(a, c)
    return a + c
}, arr1), 1);

arr1.reduce((a, c) => {
    console.log(a, c)
    return a + c
})
