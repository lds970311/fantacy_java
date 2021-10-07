const data = {a: {b: {c: 'yideng'}}}
console.log(safeGet(data, 'a.b.c')); // => yideng
console.log(safeGet(data, 'a.b.c.d')); // => undefined
console.log(safeGet(data, 'a.b.c.d.e.f.g')); // => undefined


function safeGet(data: Object, exp: string) {
    try {
        let arr = exp.split(".")
        // @ts-ignore
        return arr.reduce((data, k) => data[k], data)
    } catch (error) {
        return undefined
    }
}

