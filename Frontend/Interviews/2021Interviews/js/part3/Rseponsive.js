/**
 * Vue2数据响应式
 */

const data = {
    name: "man",
    age: 19,
    car: [
        {
            brand: "BMW",
            price: 43,
            years: 3
        }, {
            brand: "Tesela",
            price: 56,
            years: 1
        }
    ]
}

function triggerGet(data, key) {
    console.log(`${key} is getting`)
}

function triggerSet(data, key, newVal) {
    console.log(`${key} , ${newVal} is setting`)
}

function observe(data) {
    if (!data || typeof data !== "object") {
        return
    }
    const keys = Object.keys(data)
    keys.forEach(key => {
        let val = data[key]
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function () {
                triggerGet(data, key)
                return val;
            },
            set: function (newVal) {
                triggerSet(data, key, newVal)
                val = newVal
            }
        })
        if (typeof val === 'object') {
            observe(val)
        }
    })
}

observe(data)
// console.log(data.name);
// console.log(data.car[0].years);
// console.log(data.car)
// data.car[1].brand = "byd"
// data.name = 'msg'
