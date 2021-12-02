/**
 * 数组扁平化
 */
const list = [1, [2, [3, [4, 5]]]]


// @ts-ignore
console.log(list.flat(Infinity)) //[ 1, 2, 3, 4, 5 ]


//2. 递归
const newList: Array<number> = []

function flat(arr: any): void {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flat(arr[i])
        } else {
            newList.push(arr[i])
        }
    }
}

flat(list)

console.log(newList) //[ 1, 2, 3, 4, 5 ]


// 3, reduce实现
const flatten: (arr: Array<any>) => any = (arr: Array<any>) => {
    return arr.reduce((a: any, item: any) => {
        return a.concat(Array.isArray(item) ? flatten(item) : item)
    }, [])
}

console.log(flatten(list)) //[ 1, 2, 3, 4, 5 ]
