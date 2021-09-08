const fruits = [
    { name: "apple", color: "red" },
    { name: "pear", color: "yellow" },
    { name: "banana", color: "yellow" }
];
let result = fruits.every(item => {
    return item.color === "yellow";
});
console.log(result);
let res = fruits.some(item => {
    return item.color === "red";
});
console.log(res);
//# sourceMappingURL=someEvery.js.map