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
    // @ts-ignore
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
    // @ts-ignore
    const args = [...arguments].slice(1)
    return function F(this: any) {
        if (this instanceof F) {
            // @ts-ignore
            return new that(...args, ...arguments)
        }
        // @ts-ignore
        return that.apply(ctx, args.concat(...arguments))
    }
}
