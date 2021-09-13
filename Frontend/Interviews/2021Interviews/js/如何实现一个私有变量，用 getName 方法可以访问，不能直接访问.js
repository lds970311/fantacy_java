obj = {
    name: 'yuxiaoliang',
    getName: function () {
        return this.name
    }
}

Object.defineProperty(obj, 'name', {
    enumerable: false,
    configurable: false
})

console.log(obj.name)