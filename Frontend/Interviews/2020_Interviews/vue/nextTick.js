/**
 * VUE中nextTick的实现
 */

//定义全局回调函数队列
const callbackQueue = []

let pending = false;

function flushCallback() {
    pending = false;
    for (let i = 0; i < callbackQueue.length; i++) {
        callbackQueue[i]()
    }
    callbackQueue.length = 0;
}

function nextTick(callback) {
    callbackQueue.push(callback)
    if (!pending) {
        pending = true;
        setTimeout(flushCallback, 0)
    }
}

nextTick(() => {
    console.log(1)
})

nextTick(() => {
    console.log(2)
})

nextTick(() => {
    console.log(3)
})

console.log(4)
