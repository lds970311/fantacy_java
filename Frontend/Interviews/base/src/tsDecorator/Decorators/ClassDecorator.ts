@addJob("Driver")
class Person {
    public name: string;
    public age: number;
    public address: string;

    constructor() {
        this.name = "xm"
        this.age = 19
        this.address = "Beijing"
    }
}

//为Person添加job属性
function addJob(args: string) {
    return function (target: Function) {
        target.prototype.Job = args
    }
}

// @ts-ignore
console.log(Person.prototype.Job) //Driver

const p = new Person()
console.log(p.age) //19
