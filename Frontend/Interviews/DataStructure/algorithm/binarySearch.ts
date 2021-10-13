//二分查找
let a = [3, 9, 7, 5, 1, 55, 31, 77, 123]

let b = a.sort((a: number, b: number) => {
    return a - b
})

console.log(b);

function binarySearch(left: number, right: number, target: number, array: number[]): number {
    if (left > right) {
        return -1
    }
    let mid = Math.floor((left + right) / 2)
    if (array[mid] === target) {
        return mid
    }
    if (array[mid] > target) {
        return binarySearch(left, mid - 1, target, array)
    }
    if (array[mid] < target) {
        return binarySearch(mid + 1, right, target, array)
    }
    return -1
}

const number = binarySearch(0, b.length - 1, 123, b);
console.log(number);
