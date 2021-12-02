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
// @ts-ignore
arr = [...new Set(arr)]
console.log(arr)


//方式3
// @ts-ignore
arr = Array.from(new Set(arr))
console.log(arr)

//方式4:借助哈希表(最优解 O(N))
function removeRepeat2<T>(arr: T[]) {
    const map = new Map();
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!map.get(arr[i])) {
            //没有重复
            map.set(arr[i], 1)
        } else {
            //重复,删除元素
            arr.splice(i, 1)
        }
    }
}

let arr2: number[] = [1, 1, 2, 2, 3, 3, 4, 4, 1, 5, 3, 9];
removeRepeat2(arr2)
console.log("arr2:", arr2)
