/**
 * 手写实现一个bind函数
 */

Function.prototype.myBind = function (context, ...args) {
    let that = this;
    return function () {
        return that.apply(context, args);
    }
}

let Person = {}

let speak = function (a, b) {
    console.log("i can speak" + a + b)
}

let Man = {
    name: "123"
}


speak = speak.myBind(Person, 1, 23)
speak();