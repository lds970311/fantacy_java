function MyPromise(constructor) {
    let that = this;
    that.status = "pending"
    that.value = undefined
    that.reason = undefined
    that.onFulfilledList = []
    that.onRejectedList = []

    function resolve(value) {
        if (that.status === "pending") {
            that.value = value;
            that.status = "resolved";
            that.onFulfilledList.forEach(item => {
                item(that.value)
            })
        }
    }

    function reject(reason) {
        if (that.status === "pending") {
            that.reason = reason;
            that.state = "rejected";
            that.onRejectedList.forEach(item => {
                item(that.reason)
            })
        }
    }

    try {
        constructor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    let that = this;
    switch (that.status) {
        case "pending":
            that.onFulfilledList.push(() => {
                onFulfilled(that.value)
            })
            that.onRejectedList.push(() => {
                onRejected(that.reason)
            })
        case "resolved":
            onFulfilled(that.value);
            break;
        case "rejected":
            onRejected(that.reason);
            break
        default:
    }
}


let p = new MyPromise((resolve, reject) => {
    let data = {
        name: "haha",
        age: 13
    }
    setTimeout(() => {
        resolve(data)
    }, 1000)
}).then(res => {
    console.log(res);
})