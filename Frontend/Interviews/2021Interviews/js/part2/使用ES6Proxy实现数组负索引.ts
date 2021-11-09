function proxyArray(arr: any[]) {

    return new Proxy(arr, {
        // @ts-ignore
        get(target: any[], p: string | number, receiver: any): any {
            const len = target.length
            if (p >= 0) {
                // @ts-ignore
                return target[p]
            } else {
                // @ts-ignore
                return target[len + (p % len)]
            }
        }
    })
}

//defineProperty实现
function definePropertyArray<T>(arr: T[], index: number): T[] {
    return Object.defineProperty(arr, index, {
        get() {
            const len = arr.length
            if (index >= 0) {
                return arr[index]
            } else {
                return arr[len + (index % len)]
            }
        }
    })
}

// @ts-ignore
let a2 = proxyArray([1, 2, 3, 4, 5])
const a3 = definePropertyArray([6, 7, 8, 9], -1)
console.log(a3[-2]);

console.log(a2[-2]);
console.log(a3);
