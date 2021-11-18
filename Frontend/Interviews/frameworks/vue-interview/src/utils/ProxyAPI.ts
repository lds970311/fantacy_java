//CREATE AT: 2021-11-17
const data = {
    name: "lili",
    age: 19,
    cars: [1, 2, 3, 4]
}


function defineReactive(data: any) {
    if (typeof data !== "object" || !data) {
        return data
    }
    return new Proxy(data, {
        get(target, key, receiver) {
            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key)) {
                console.log("get", key)
            }
            const res = Reflect.get(target, key, receiver)
            return res;

        },
        set(target, key, value, receiver) {
            //重复数据不处理
            const oldValue = target[key];
            if (value === oldValue) {
                return false;
            }
            const res = Reflect.set(target, key, value, receiver)
            console.log("setter", key)
            return res;
        },
        deleteProperty(target, key) {
            //判断属性是否存在
            const ownKeys = Reflect.ownKeys(target)
            if (!ownKeys.includes(key)) {
                return false
            }
            const res = Reflect.deleteProperty(target, key)
            console.log("delete", key)
            return res;
        }
    })
}

const dataRef = defineReactive(data)

dataRef.cars.push("he")
console.log(dataRef.cars)
/*
console.log(dataRef.name);
dataRef.cars[1] = "123"

delete dataRef.cars
*/
