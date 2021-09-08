//防抖 && 节流

function anti(func, time) {
    return (function () {
        setTimeout(func, time)
    })()
}

anti(() => {
    console.log("123")
}, 500)


function debounce(func, wait = 100, immediate = true) {
    let timer, ctx, args
    //延迟执行函数
    const later = () => setTimeout(() => {
        timer = null
        if (!immediate) {
            func.apply(ctx, args)
            ctx = args = null
        }
    }, wait)

    //返回实际调用函数
    return function (...params) {
        if (!timer) {
            timer = later()
            if (immediate) {
                func.apply(this, params)
            } else {
                ctx = this;
                args = params
            }
        } else {
            clearTimeout(timer)
            timer = later()
        }
    }
}