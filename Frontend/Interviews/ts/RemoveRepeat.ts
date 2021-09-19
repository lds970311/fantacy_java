/**
 * 删除数组重复元素
 */
// @ts-ignore
let arr: number[] = [1, 1, 2, 2, 3, 3, 4, 4, 1, 5, 3, 9];

//方式1
function removeRepeat(arr: number[]): Array<number> {
    let newArr = []
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

let numbers = removeRepeat(arr);
console.log(numbers); //[ 1, 2, 3, 4, 5, 9 ]


//方式2
arr = [...new Set(arr)]
console.log(arr)


//方式3
arr = Array.from(new Set(arr))
console.log(arr)
