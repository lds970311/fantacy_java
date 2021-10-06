/**
 * 合并二维有序数组成一维有序数组
 */


let a1 = [[1, 2, 4], [2, 3, 7], [3, 5, 7], [4, 5, 8]]

function mergeArray(arr1: number[], arr2: number[]): number[] {
    //定义左右两个指针
    let j = 0;
    let i = 0;
    let res = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++;
        }
    }
    if (i < arr1.length) {
        return res.concat(arr1.slice(i))
    } else {
        return res.concat(arr2.concat(j))
    }
}

let a2 = [1, 2, 3, 4, 5]
let a3 = [3, 1, 2]

const numbers = mergeArray(a2, a3);
console.log(numbers);

function mergeSort(arr: Array<number> | Array<Array<number>>): Array<number> {
    const len = arr.length;
    if (len <= 1) {
        // @ts-ignore
        return arr[0]
    }
    let mid = Math.floor(len / 2);
    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid, len))
    arr = mergeArray(leftArr, rightArr);
    return arr
}

const numbers1 = mergeSort(a1);
console.log(numbers1);