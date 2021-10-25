/**
 * 手写一个Promise
 */

class Commitment {
    static PENDING = "pending";
    static FULFILLED = "filled";
    static REJECTED = "rejected";

    constructor(cb) {
        this.value = null
        this.status = Commitment.PENDING
        this.resolveCallback = []
        this.rejectCallback = []
        try {
            cb(this.resolve.bind(this), this.reject.bind(this))
        } catch (e) {
            this.reject(e)
        }
    }

    resolve(val) {
        if (this.status === Commitment.PENDING) { //切换状态
            this.status = Commitment.FULFILLED
            this.value = val
            setTimeout(() => {
                this.resolveCallback.forEach(cb => cb(this.value))
            }, 0)
        }
    }

    reject(val) {
        if (this.status === Commitment.PENDING) {
            this.status = Commitment.REJECTED
            this.value = val
            setTimeout(() => {
                this.rejectCallback.forEach(cb => cb(this.value))
            }, 0)
        }
    }

    then(onFullfilled, onRejected) {
        return new Commitment((resolve, reject) => {
            typeof onFullfilled === "function" ? onFullfilled : val => val
            typeof onRejected === "function" ? onFullfilled : err => err
            if (this.status === Commitment.PENDING) {
                this.rejectCallback.push(onRejected)
                this.resolveCallback.push(onFullfilled)
            }
            if (this.status === Commitment.FULFILLED) {
                onFullfilled(this.value)
            }

            if (this.status === Commitment.REJECTED) {
                onRejected(this.value)
            }
        })
    }
}

console.log("first")
let promise = new Commitment((resolve, reject) => {
    setTimeout(() => {
        resolve("hi hi")
        reject("111")
        console.log(123)
    }, 0)

    // throw new Error('not implemented')
})

promise.then(
    onfullfilled => {
        console.log(onfullfilled)
    },
    onrejected => {
        console.log(onrejected)
    }
)
console.log("third")

