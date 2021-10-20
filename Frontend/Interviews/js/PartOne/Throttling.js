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
    let startTime = Date.now();
    return function () {
        let ctx = this;
        let endTime = Date.now();
        let interval = time - (endTime - startTime)

        if (interval <= 0) {
            //立即执行该函数
            callback.apply(ctx, [...(arguments)])
            startTime = Date.now();
        }
    }
}

const input = document.getElementById("input")

input.onclick = throttling(() => {
    console.log("123")
}, 1000)
