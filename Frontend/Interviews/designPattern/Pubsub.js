const shopObj = {
    list: [],
    addListener: function (key, fn) {
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    publish: function () {
        let key = Array.prototype.shift.call(arguments);
        const funcs = this.list[key];
        if (!funcs || funcs.length === 0) {
            console.log("no relevant subscriber");
            return;
        }
        for (let i = 0; i < funcs.length; i++) {
            funcs[i].apply(this, arguments);
        }
    },
    removeListener(key, fn) {
        const fns = this.list[key];
        if (fn === null) {
            fns.length = 0;
            return;
        }
        if (!fns) {
            fns && (fns.length = 0);
            return false;
        }
        else {
            for (let i = fns.length - 1; i >= 0; i--) {
                let _fn = fns[i];
                if (_fn === fn) {
                    fns.splice(i, 1);
                }
            }
        }
    }
};
shopObj.addListener("xm", size => {
    console.log(`xm size is ${size}`);
});
shopObj.addListener("张三", size => {
    console.log(`zhangsan size is ${size}`);
});
shopObj.publish("张三", 120);
shopObj.removeListener("张三", null);
shopObj.publish("张三", 120);
//# sourceMappingURL=Pubsub.js.map