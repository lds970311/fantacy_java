/**
 * 属性装饰器
 */


class Calculator {
    @log
    num: number

    private _weight: number

    constructor() {
        this.num = 0;
        this._weight = 98
    }

    public square() {
        return this.num ** 2;
    }

    @readOnly(true)
    get weight(): number {
        return this._weight;
    }
}

function log(target: any, propertyKey: string) {
    console.log(target)
    console.log(propertyKey)
    let value = target[propertyKey]
    //用来替换的getter & setter

    //替换属性, 先删除原来的,在重新定义新的
    if (delete target[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                console.log(`getter for ${propertyKey} value is ${value}`)
                return value
            },
            set: function (newVal: number) {
                console.log(`setter for ${propertyKey} value is ${newVal}`)
                value = newVal
            },
            enumerable: true,
            configurable: true
        })
    }
}

function readOnly(val: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = val
    }
}

const calc = new Calculator()
calc.num = 5;
console.log(calc.square())
console.log(calc.num)

