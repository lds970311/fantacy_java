/**
 * 手写类型判断函数
 */
function getDataType(data) {
    if (data === null) {
        return data + "";
    }
    if (typeof data === "object") {
        var primeType = Object.prototype.toString.call(data);
        var currType = primeType.split(" ")[1].split("");
        currType.pop();
        return currType.join("");
    }
    return typeof data;
}
var a2 = Symbol(1);
console.log(getDataType(123));
console.log(getDataType("hehe"));
console.log(getDataType([]));
console.log(getDataType({}));
console.log(getDataType(a2));
console.log(getDataType(100n));
/**
 *
 number
 string
 Array
 Object
 symbol
 bigint
 */
