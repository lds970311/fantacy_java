function quickSort(arr: Array<unknown>) {
    if (!arr || arr.length === 0) {
        return arr;
    }
    if (arr.length === 1) {
        return arr;
    }
    let left = []
    let right = []
    let baseNum = arr[0];
    arr.forEach(item => {
        if (item < baseNum) {
            left.push(item)
        } else if (item > baseNum) {
            right.push(item)
        }
    })
    return quickSort(left).concat(baseNum, quickSort(right));
}

// @ts-ignore
let a1: number[] = [4, 7, 5, 2, 3]
// @ts-ignore
let res1 = quickSort(a1)

console.log(res1)
