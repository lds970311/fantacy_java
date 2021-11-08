let arr = [1, 2, 3, 9, -1, 7]
arr1 = arr;
arr1.push(4)
console.log(arr);


let str = "hello what are you doingccccc"

let obj = {}

for (let i = 0; i < str.length; i++) {
    if (!obj[str.charAt(i)]) {
        obj[str.charAt(i)] = 1;
    } else {
        obj[str.charAt(i)]++
    }
}

function getMaxValue(obj) {
    let maxKey = 0;
    let char = ""
    Object.keys(obj).forEach(key => {
        if (obj[key] > maxKey) {
            maxKey = obj[key]
            char = key
        }
    })
    return {
        char,
        time: maxKey
    };
}

console.log(getMaxValue(obj))
