function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target) //{sayHai: ƒ, constructor: ƒ}
    console.log(propertyKey) //sayHai
    console.log(descriptor)
    /**
     *  configurable: true
     enumerable: true
     value: ƒ ()
     writable: true
     */
}


class Man {
    private name: string;

    constructor() {
        this.name = "xm"
    }

    @method
    sayHai(): string {
        return "Hello"
    }
}


const man = new Man()
man.sayHai()
