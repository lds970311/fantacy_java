//Array.some Array.every

const fruits = [
    {name: "apple", color: "red"},
    {name: "pear", color: "yellow"},
    {name: "banana", color: "yellow"}
]

//检测所有水果是否都是yellow

// @ts-ignore
let result = fruits.every(item => {
    return item.color === "yellow";
})

console.log(result);


//检测是否有"red"

let res = fruits.some(item => {
    return item.color === "red"
})

console.log(res);

