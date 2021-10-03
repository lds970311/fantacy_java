//数组求和, 新思路

// @ts-ignore
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 9, 11, 15, 29, 18]

// @ts-ignore
let res = arr.reduce((total, i) => total += i, 0);
console.log(res);


function getSum(arr: Array<number>): number {
    if (arr.length === 1) {
        return arr[0]
    }
    return arr[0] + getSum(arr.slice(1))
}

console.log(getSum(arr));

//数组的扁平化
// @ts-ignore
let arr2 = [1, [990, [543, 1244]], [2, 3, [7, 11, [14, 15, 66, [21, 54, [55, 12, [4455, [166, 324, [1226]]]]]]]]]

let myFlat = function (src: Array<any>, des: Array<number>): number[] {
    let len = src.length;
    for (let i = 0; i < len; i++) {
        if (Array.isArray(src[i])) {
            myFlat(src[i], des)
        } else {
            des.push(src[i])
        }
    }
    return des;
}

// @ts-ignore
const numbers = myFlat(arr2, []);
console.log(numbers);
