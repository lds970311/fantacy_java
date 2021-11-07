/**
 * 手写call apply bind
 */

//@ts-ignore
Function.prototype.myBind = function (newObj: any, ...args: any[]) {
    if (typeof this !== 'function') {
        throw new Error('must be a function')
    }
    let ctx = this;

    return function () {
        //@ts-ignore
        return ctx.apply(newObj, args)
    }
}

let name2 = "outer"
let a2 = {
    name2: "lili",
    getName: function () {
        return this.name2
    }
}
let b1 = {
    name2: "hehe"
}

//@ts-ignore

let getName = a2.getName;
//@ts-ignore
getName = getName.myBind(b1)
console.log(getName())
