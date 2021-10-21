function repeat(this: any, func: Function, times: number, wait: number): Function {
    // your code
    let timer: number;
    let that = this;
    const myFunc = (msg: string) => {
        timer = setTimeout(() => {
            if (times > 0) {
                times--;
                func.call(that, msg)
                myFunc(msg)
            } else {
                clearTimeout(timer)
            }
        }, wait)
    }
    return function (msg: string) {
        myFunc(msg)
    }
}

const repeatFun = repeat(console.log, 4, 3000);
repeatFun("Hello World");
// 实现打印4次，每次间隔3000ms
