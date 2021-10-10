class Watcher {
    constructor() {
        this.subscribers = {}
    }

    addSubscriber(subscriber, func) {
        if (!this.subscribers[subscriber]) {
            this.subscribers[subscriber] = []
        }
        this.subscribers[subscriber].push(func)
    }

    notify(subscriber, ...args) {
        if (!this.subscribers[subscriber]) {
            throw new Error("no such subscriber")
        }

        const funcs = this.subscribers[subscriber];
        funcs.forEach(fn => fn.call(this, args))
    }

    removeSubscriber(subscriber, name) {
        if (!this.subscribers[subscriber]) {
            throw new Error("no such subscriber")
        }
        if (!name) {
            this.subscribers[subscriber] = [];
        } else {
            this.subscribers[subscriber] = this.subscribers[subscriber].filter(fn => {
                    return fn !== name;
                }
            )
        }
    }
}

const watcher = new Watcher()
watcher.addSubscriber("张三", name => {
    console.log(`name is ${name}`)
})

watcher.addSubscriber("张三", name => {
    console.log(`age is ${name}`)
})

watcher.addSubscriber("李四", name => {
    console.log(`name is ${name}`)
})

watcher.notify("张三", "三个")

watcher.removeSubscriber("张三")

watcher.notify("李四", "三个")
