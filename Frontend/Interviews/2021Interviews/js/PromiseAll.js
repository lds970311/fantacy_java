//手写Promise.all
function PromiseAll(promiseArray) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promiseArray)) {
            return reject(new Error("传入的参数错误!"))
        }
        const res = []
        let counter = 0;
        for (let i = 0; i < promiseArray.length; i++) {
            Promise.resolve(promiseArray[i]).then(val => {
                counter++;
                res[i] = val

                if (counter === promiseArray.length) {
                    resolve(res)
                }
            }).catch(err => {
                reject(err);
            })
        }
    })
}

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

const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        rej(3)
    }, 3000)
})


PromiseAll([p1, p2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err)
})
