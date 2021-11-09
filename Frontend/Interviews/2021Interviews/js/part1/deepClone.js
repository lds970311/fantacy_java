//对象深度克隆的简单实现

function deepClone(obj, map = new WeakMap()) {
    if (typeof obj !== 'object' || !obj) {
        return obj
    }
    let newObj = obj instanceof Array ? [] : {}
    if (obj instanceof Date) {
        return new Date(obj)
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj)
    }
    if (obj instanceof Function) {
        return new Function("return " + obj.toString()).call(this)
    }

    //处理循环依赖
    if (map.get(obj)) {
        return map.get(obj)
    } else {
        map.set(newObj, obj)
    }
    Object.keys(obj).forEach(key => {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key])
        }
    })
    return newObj
}

let person = {
    name: 'xiaoming',
    age: 12,
    cats: ['audi', 'bmw'],
    house: {
        location: 'beijing',
        area: 140
    },
    eat: function () {
        console.log(`${this.name} is eating`)
    }
}

const newPerson = deepClone(person)
newPerson.house.location = 'shanghai'
newPerson.house.area = 200
console.log(newPerson)
console.log(person)

newPerson.eat()
