/**
 * 工厂模式
 */

let Electronics = function (subType, superType) {
    if (typeof Electronics[superType] === 'function') {
        let F = function () {
        }
        F.prototype = new Electronics[superType]()
        subType.constructor = subType
        subType.prototype = new F()
    } else {
        throw new Error('没有找到' + superType + '抽象类')
    }
}
Electronics.Phone = function () {
    this.type = 'Phone'
}
Electronics.Phone.prototype = {
    getPrice: function () {
        return new Error('请先重写子类')
    }
}

Electronics.Tv = function () {
    this.type = 'Tv'
}
Electronics.Tv.prototype = {
    getPrice: function () {
        return new Error('请先重写子类')
    }
}

Electronics.PPC = function () {
    this.type = 'PPC'
}
Electronics.PPC.prototype = {
    getPrice: function () {
        return new Error('请先重写子类')
    }
}

Electronics.Computer = function () {
    this.type = 'Computer'
}
Electronics.Computer.prototype = {
    getPrice: function () {
        return new Error('请先重写子类getPrice方法')
    }
}

let Phone = function (name, price) {
    this.name = name
    this.price = price
}
Electronics(Phone, 'Phone')
Phone.prototype.getPrice = function () {
    return this.price;
}

let TV = function (name, price) {
    this.name = name
    this.price = price
}
Electronics(TV, 'Tv')
TV.prototype.getPrice = function () {
    return this.price
}

let Computer = function (name, price) {
    this.name = name
    this.price = price
}
Electronics(Computer, 'Computer')
Computer.prototype.getPrice = function () {
    return this.price
}

let PPC = function (name, price) {
    this.name = name
    this.price = price
}
Electronics(PPC, 'PPC')
PPC.prototype.getPrice = function () {
    return this.price
}

let huaw = new Phone('华为', 3000)
console.log('价钱：' + huaw.getPrice() + '，类型：' + huaw.type)
let changh = new TV('长虹', 1999)
console.log('价钱：' + changh.getPrice() + '，类型：' + changh.type)
let acer = new Computer('宏碁', 6989)
console.log('价钱：' + acer.getPrice() + '，类型：' + acer.type)
let mipad = new PPC('小米平板', 2999)
console.log('价钱：' + mipad.getPrice() + '，类型：' + mipad.type)
