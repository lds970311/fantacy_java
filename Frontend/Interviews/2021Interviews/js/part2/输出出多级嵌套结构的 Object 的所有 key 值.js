const obj = {
    a: "12",
    b: "23",
    first: {
        c: "34",
        d: "45",
        second: {3: "56", f: "67", three: {g: "78", h: "89", i: "90"}},
    },
};
// => [a,b,c,d,e,f,g,h,i]

const getAllKeys = (obj, arr) => {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            getAllKeys(obj[key], arr)
        }
        if (typeof obj[key] !== "object") {
            arr.push(key);
        }
    })
    return arr;
}

let allKeys = getAllKeys(obj, []);
console.log(allKeys);