class Obj {
    constructor() {
        this.name = "haha"
        this.getName = function () {
            return this.name
        }
    }
}

let obj = new Obj();
console.log(obj.name)