/**
 * 使用requestAnimationFrame实现循环定时器
 */
function setIterVal(callback: Function, interval: number): number {
    let timer;
    let startTime = Date.now();
    let endTime = startTime;
    const loop = () => {
        timer = window.requestAnimationFrame(loop)
        endTime = Date.now();
        if (endTime - startTime >= interval) {
            startTime = endTime = Date.now();
            callback(timer)
        }
    }
    timer = window.requestAnimationFrame(loop)
    return timer;
}

let a: number = 0;
setIterVal((timer: number) => {
    console.log(a)
    a++
    if (a === 10) {
        cancelAnimationFrame(timer)
    }
}, 1000)
