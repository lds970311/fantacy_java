function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key]);
    });
}
function defineReactive(obj, key, val) {
    observe(val);
    let dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            return val;
        },
        set(v) {
            dep.notify();
            val = v;
        }
    });
}
class Dep {
    constructor() {
        this.subs = [];
    }
    addSub(sub) {
        console.log("get ???, ????????");
        this.subs.push(sub);
    }
    notify() {
        this.subs.forEach(sub => {
            console.log("set??????, update");
            sub.update();
        });
    }
}
class Wather {
    constructor(obj, key, callback) {
        Dep.target = this;
        this.callback = callback;
        this.obj = obj;
        this.key = key;
        this.val = obj[key];
        Dep.target = null;
    }
    update() {
        this.val = this.obj[this.key];
        this.callback(this.val);
    }
}
Dep.target = null;
let data = {
    name: "jack"
};
observe(data);
new Wather(data, 'name', () => {
    console.log("haha");
});
console.log(data.name);
data.name = "lucy";
console.log(data.name);
//# sourceMappingURL=dataObserve.js.map