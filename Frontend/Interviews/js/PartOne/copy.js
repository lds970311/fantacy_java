//深拷贝&& 浅拷贝

const person = {
    name: "xm",
    age: 19,
    cars: ["bmw", "audi"]
}

const p1 = person
console.log(p1 === person)

function shallowCopy(obj) {
    let target = {}
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            target[i] = obj[i]
        }
    }
    return target
}

function deepClone(obj) {
    let target = Array.isArray(obj) ? [] : {}
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    if (obj instanceof Date) {
        return new Date(obj)
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj)
    }

    Object.keys(obj).forEach(item => {
        if (obj.hasOwnProperty(item)) {
            target[item] = deepClone(obj[item])
        }
    })
    return target
}

// const p2 = shallowCopy(person)
const p2 = deepClone(person)
console.log(p2 === person)

p2.name = "hua"
p2.cars[0] = "fll"

console.log(person)
console.log(p2)
