/**
 * 实现一个Promise
 */

//标记promise的三种状态
const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"

function MyPromise(func) {
    let that = this;
    //初始化状态
    this.state = PENDING
    //用来保存reslove或者rejected传入的值
    this.value = null
    //保存reslove回调
    this.resolveCallbacks = []
    //保存reject的回调
    this.rejectCallbacks = []

    //状态变为resolve
    function resolve(value) {
        if (value instanceof MyPromise) {
            return value.then(resolve, reject)
        }
        //保证代码的执行为本轮事件循环的末尾
        setTimeout(() => {
            if (that.state === PENDING) {
                that.state = RESOLVED
                //设置传入的值
                that.value = value
                //执行回调
                that.resolveCallbacks.forEach(cb => {
                    cb(value)
                })
            }
        }, 0)
    }

    //状态改为reject
    function reject(value) {
        setTimeout(() => {
            if (that.state === PENDING) {
                that.state = REJECTED
                that.value = value
                that.rejectCallbacks.forEach(cb => {
                    cb(value)
                })
            }
        }, 0)
    }

    //将两个方法提供给用户传进来的函数中
    try {
        func(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
    //判断两个参数是否为函数类型,因为这两个参数可选
    let that = this;

    onResolved =
        typeof onResolved === "function"
            ? onResolved
            : function (value) {
                return value;
            };

    onRejected =
        typeof onRejected === "function"
            ? onRejected
            : function (error) {
                throw error;
            };

    switch (that.status) {
        case PENDING:
            that.resolveCallbacks.push(() => {
                onResolved(that.value)
            })
            that.rejectCallbacks.push(() => {
                onRejected(that.reason)
            })
            break;
        case RESOLVED:
            onResolved(that.value);
            break;
        case REJECTED:
            onRejected(that.reason);
            break
        default:
    }
}
new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 400)
}).then(res => {
    console.log(res);
})
