//VUE ?????????


// @ts-ignore
function observe(obj: any) {
    if (!obj || typeof obj !== 'object') {
        return
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(obj: any, key: any, val: any) {
    observe(val)
    let dep = new Dep()
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get(): any {
            // console.log("get value")
            if (Dep.target) {
                //??watcher????????
                dep.addSub(Dep.target)
            }
            return val
        },

        set(v: any): void {
            //console.log("change value")
            //???wather??update
            dep.notify()
            val = v;
        }
    })
}

//???dep????
class Dep {
    static target: Wather | null;
    private subs: any[];

    constructor() {
        this.subs = []
    }

    addSub(sub: any): void {
        console.log("get ???, ????????")
        this.subs.push(sub)
    }

    notify(): void {
        this.subs.forEach(sub => {
            console.log("set??????, update")
            sub.update()
        })
    }
}

class Wather {
    private callback: Function;
    private obj: any
    private key: any
    private val: any


    constructor(obj: any, key: any, callback: Function) {
        Dep.target = this
        this.callback = callback
        this.obj = obj
        this.key = key
        this.val = obj[key]
        // @ts-ignore
        Dep.target = null
    }

    update(): void {
        this.val = this.obj[this.key]
        this.callback(this.val)
    }
}

//???????. ?????????????watcher
// @ts-ignore
Dep.target = null


// @ts-ignore
let data = {
    name: "jack"
}

observe(data)
new Wather(data, 'name', () => {
    console.log("haha")
})
// @ts-ignore
console.log(data.name)

// @ts-ignore
data.name = "lucy"

// @ts-ignore
console.log(data.name)
