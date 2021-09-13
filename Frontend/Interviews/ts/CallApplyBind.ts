/**
 * 手写call apply bind
 */

// @ts-ignore
Function.prototype.myCall = function (ctx) {
    if (typeof this !== 'function') {
        throw new Error("Error")
    }
    ctx = ctx || window
    ctx.fn = this;
    const args = [...arguments].slice(1);
    const result = ctx.fn(...args)
    delete ctx.fn
    return result;
}


// @ts-ignore
Function.prototype.myApply = function (ctx) {
    if (typeof this !== 'function') {
        throw new Error("Error")
    }
    ctx = ctx || window
    ctx.fn = this;
    let result
    if (arguments[1]) {
        result = ctx.fn(...arguments[1])
    } else {
        result = ctx.fn()
    }
    delete ctx.fn
    return result;
}

// @ts-ignore
Function.prototype.myBind = function (ctx) {
    if (typeof this !== 'function') {
        throw new Error("Error")
    }
    const that = this
    const args = [...arguments].slice(1)
    return function F() {
        if (this instanceof F) {
            return new that(...args, ...arguments)
        }
        return that.apply(ctx, args.concat(...arguments))
    }
}