/**
 * 使用for...of遍历对象
 * for... of主要由于遍历数组, 需要使对象实现symbol或者使用generator
 *
 */

let obj1 = {
    a: 1,
    b: "haha",
    c: Date.now()
}

//1. symbol
obj1[Symbol.iterator] = function () {
    let key = Object.keys(this)
    let count = 0;
    return {
        next() {
            if (count < key.length) {
                return {
                    value: obj1[key[count++]],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}


for (const ele of obj1) {
    console.log(ele)
}

let obj2 = {
    c: 911,
    d: "hello",
    e: false
}

//方式2: 生成器
obj2[Symbol.iterator] = function* () {
    let key = Object.keys(this)
    for (const string of key) {
        yield obj2[string]
    }
}

for (const ele of obj2) {
    console.log(ele);
}
