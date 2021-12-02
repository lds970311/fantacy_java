//CREATE AT: 2021-12-02
interface CacheObject {
    [key: string]: Function[]
}

interface PubSubInterface {
    cacheGroups: CacheObject
    addListener: (name: string, listener: Function) => void
    publish: (name?: string, ...args: any[]) => void
    removeListener: (name: string, listenerName ?: string | Function) => boolean
}

const PubsubImpl: PubSubInterface = {
    cacheGroups: {},
    addListener(name: string, listener: Function): void {
        const keys = Object.keys(this.cacheGroups);
        if (keys.includes(name)) {
            this.cacheGroups[name].push(listener);
        } else {
            this.cacheGroups[name] = [];
            this.cacheGroups[name].push(listener);
        }

    },
    publish(name?: string, ...args: any[]): void {
        if (name) {
            const keys = Object.keys(this.cacheGroups);
            if (!keys.includes(name)) {
                throw new Error("invaild listener name!")
            }
            const funcs = this.cacheGroups[name];
            funcs.forEach(func => {
                func(...args)
            })
        } else {
            Object.keys(this.cacheGroups).forEach(key => {
                const funcs = this.cacheGroups[key];
                funcs.forEach(func => {
                    func(...args);
                })
            })
        }
    },
    removeListener(name: string, listenerName: string | Function | undefined): boolean {
        const keys = Object.keys(this.cacheGroups);
        if (!keys.includes(name)) {
            return false;
        }
        if (!listenerName) {
            delete this.cacheGroups[name]
            return true;
        } else {
            const funcs = this.cacheGroups[name];
            this.cacheGroups[name] = funcs.filter(item => item !== listenerName);
            return true
        }
    }
}

PubsubImpl.addListener("xm", (size: any) => {
    console.log(`xm size is ${size}`)
})

PubsubImpl.addListener("张三", (size: any) => {
    console.log(`zhangsan size is ${size}`)
})

PubsubImpl.publish("xm", 120)
PubsubImpl.removeListener("xm");
PubsubImpl.publish("xm", 120)

