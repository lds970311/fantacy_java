/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度
 */

const arr = [10, 9, 2, 5, 3, 7, 101, 18]

function isAscend(a: number, b: number): boolean {
    return b > a;
}

function getLongestSerial(arr: number[]): number {
    let maxLength = []
    let count = 1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (isAscend(arr[i], arr[i + 1])) {
            ++count;
        } else {
            maxLength.push(count)
            count = 1;
        }
    }
    return maxLength.sort((a, b) => {
        return b - a
    })[0]
}

console.log(getLongestSerial(arr));
