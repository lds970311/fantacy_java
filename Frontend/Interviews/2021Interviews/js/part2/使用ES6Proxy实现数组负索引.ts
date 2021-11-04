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

// @ts-ignore
let a2 = proxyArray([1, 2, 3, 4, 5])

console.log(a2[-2]);
