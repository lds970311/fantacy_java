//消息定义发布模式

declare interface IPubsub {
    list: Array<unknown>,
    addListener: (key: string | number, fn: Function) => void,
    publish: () => void
    removeListener: (key: string, fn: Function) => void | false
}

const shopObj: IPubsub = {
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

    removeListener(key: string, fn?: Function | null): void | false {
        const fns = this.list[key]
        if (fns) {
            // @ts-ignore
            this.list[key] = fn === null ? [] || this.fns.filter(item => item != fn)
        }

    }

}

//订阅者1
shopObj.addListener("xm", size => {
    console.log(`xm size is ${size}`)
})

//订阅者2
shopObj.addListener("张三", size => {
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
