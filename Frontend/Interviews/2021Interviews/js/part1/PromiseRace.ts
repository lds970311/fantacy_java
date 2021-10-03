//手写Promise.race

function PromiseRace(promiseArray: Promise<any>[]): Promise<unknown> {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseArray.length; i++) {
            promiseArray[i].then(resolve, reject);
        }
    })
}

// @ts-ignore
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(1)
    }, 1000)
})

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(2)
    }, 2000)
})

// @ts-ignore
const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        rej(3)
    }, 3000)
})

PromiseRace([p1, p2, p3]).then(res => {
    console.log(res);
})
