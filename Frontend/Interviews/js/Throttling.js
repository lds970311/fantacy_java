//节流函数

/*function throttling(time, cb) {
    let timerOut;

    return function () {
        if (!timerOut) {
            timerOut = setTimeout(() => {
                cb();
                timerOut = null
            }, time)
        }

    }
}*/

function throttling(callback, time) {
    let timer = null;
    let startTime = Date.now();
    return function () {
        let endTime = Date.now();
        let interval = time - (endTime - startTime)
        let ctx = this;
        let args = arguments;
        clearTimeout(timer)
        if (interval <= 0) {
            //立即执行该函数
            callback.apply(ctx, [...args])
            startTime = Date.now();
        } else {
            timer = setTimeout(callback, interval)
        }
    }
}

const input = document.getElementById("input")

input.onclick = throttling(() => {
    console.log("123")
}, 500)
