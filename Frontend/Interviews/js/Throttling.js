//节流函数

function throttling(time, cb) {
    let timerOut;

    return function () {
        if (!timerOut) {
            timerOut = setTimeout(() => {
                cb();
                timerOut = null
            }, time)
        }

    }
}

const input = document.getElementById("input")

input.onclick = throttling(1000, () => {
    console.log("aaa")
})