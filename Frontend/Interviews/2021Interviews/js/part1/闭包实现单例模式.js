const singleton = (function () {
    let instance;
    let createSingleton = function (name) {
        this.name = name
        if (instance) {
            return instance
        }
        return instance = this
    }
    createSingleton.prototype.getName = function () {
        console.log(this.name)
    }
    return createSingleton;
})()

let a = new singleton('a')
let b = new singleton('b')

a.getName();
b.getName()
console.log(a === b) //true