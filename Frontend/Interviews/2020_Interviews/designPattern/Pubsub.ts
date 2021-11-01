//消息定义发布模式

declare interface IPubsub<T> {
    list: Array<T>,
    addListener: (key: T, fn: Function) => void,
    publish: () => void
    removeListener: (key: T, fn: Function | null) => void | false
}

const shopObj: IPubsub<any> = {
    //缓存列表,用来存放订阅函数
    list: [],
    //添加订阅者
    addListener: function (key, fn) {
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);

    },
    //发布消息
    publish: function () {
        let key = Array.prototype.shift.call(arguments);
        const funcs = this.list[key];
        if (!funcs || funcs.length === 0) {
            console.log("no relevant subscriber")
            return
        }
        for (let i = 0; i < funcs.length; i++) {
            funcs[i].apply(this, arguments)
        }
    },
    //取消订阅

    removeListener(key: any, fn?: Function | null): void | false {
        const fns = this.list[key]
        let result;
        if (!fn) {
            result = []
        } else {
            result = fns.filter((item: any) => item !== fn)
        }
        this.list[key] = result
    }
}

//订阅者1
shopObj.addListener("xm", (size: any) => {
    console.log(`xm size is ${size}`)
})

//订阅者2
shopObj.addListener("张三", (size: any) => {
    console.log(`zhangsan size is ${size}`)
})

// @ts-ignore
//通知张三
shopObj.publish("张三", 120)

//张三取消订阅
shopObj.removeListener("张三", null)
// @ts-ignore
shopObj.publish("张三", 120)
//结果: no relevant subscriber
