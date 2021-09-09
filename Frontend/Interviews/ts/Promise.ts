//实现一个简洁版的Promise

const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"

function myPromise() {
    const that = this
    this.state = PENDING
    this.value = null
    this.resolvedCallbacks = []
    this.rejectedCallbacks = []

    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVED
            that.value = value

            that.resolvedCallbacks.map(cb => {
                cb(that.value)
            })
        }
    }

    function reject(reason) {
        if (that.state === PENDING) {
            that.state = REJECTED
            that.value = reason
            that.rejectedCallbacks.map(cb => {
                cb(that.value)
            })
        }
    }

}