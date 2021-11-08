/**
 * 代理模式
 */

//示例1: 司机开车

class Car {
    drive(): string {
        return "driving"
    }
}

class Driver {
    public age: number;

    constructor(age: number) {
        this.age = age;
    }
}

class CarProxy {
    private driver: Driver;

    constructor(driver: Driver) {
        this.driver = driver;
    }

    drive(): string {
        if (this.driver.age < 18) {
            return "to yong to drive"
        }
        return new Car().drive();
    }
}

const driver = new Driver(19);

// @ts-ignore
const result = new CarProxy(driver).drive();

console.log(result);


//示例2: es6-proxy,在目标对象之间架设一层拦截
const obj = {}

const proxy = new Proxy(obj, {
    get(target: {}, p: string | symbol, receiver: any): any {
        return Reflect.get(target, p, receiver)
    },
    set(target: {}, p: string | symbol, value: any, receiver: any): boolean {
        return Reflect.set(target, p, value, receiver)
    }
})


// @ts-ignore
proxy.count = 1;
// @ts-ignore
++proxy.count

// @ts-ignore
console.log(obj.count) //2
