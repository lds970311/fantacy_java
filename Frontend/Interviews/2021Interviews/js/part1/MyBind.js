/**
 * 手写实现一个bind函数
 */

Function.prototype.myBind = function (context, ...args) {
    let that = this;
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    context = context || window || global;
    context.fn = this;
    const result = context.fn(...args)
    delete context.fn
    return result;
}

function Person() {
    this.name = "man";
}

let a = {
    name: "a"
}

let speak = function (a, b) {
    console.log("i can speak" + a + b)
    console.log(`${this.name} is speaking`)
}

let Man = {
    name: "123"
}


speak.myBind(Person, 1, 2)
speak.myBind(a, 1, 2, 3)
