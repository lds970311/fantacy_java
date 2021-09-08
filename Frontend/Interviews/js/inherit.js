//es5实现继承
function Parent(name, age) {
    this.name = name
    this.age = age
}

Parent.prototype.say = function () {
    console.log(this.name + "年龄" + this.age)
}


function Child(address, name, age) {
    Parent.call(this, name, age)
    this.address = address
}


Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

Child.prototype.say = function () {
    console.log("123")
    console.log(`${this.name},age:${this.age},address:${this.address}`)
}


let child = new Child("北京", "小米", 12);
console.log(child)


let child2 = new Child("北京", "小h", 19);
child2.say() //小h,age:19,address:北京

