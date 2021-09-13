function Animal(name) {
    this.name = name || 'animal';
    //实例方法
    this.sleep = function () {
        console.log(this.name + 'is sleeping')
    }
}

//原型方法
Animal.prototype.eat = function (food) {
    console.log(this.name + 'is eating' + food)
}

//原型链继承
function Cat() {

}

Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

const cat = new Cat();

console.log(cat.name);
cat.eat('fish')
cat.sleep()
console.log(cat instanceof Animal); //true console.log(cat instanceof Cat); //true

// 特点：基于原型链，既是父类的实例，也是子类的实例
// 缺点：无法实现多继承

//构造继承
function Dog(name) {
    Animal.call(this)
    this.name = name || 'dog';
}

const dog = new Dog()
console.log(dog.name)
dog.sleep();
console.log(dog instanceof Animal); //false
console.log(dog instanceof Dog); //true

// 特点：可以实现多继承
// 缺点：只能继承父类实例的属性和方法，不能继承原型上的属性和方法


//组合继承
function Tiger(name) {
    Animal.call(this)
    this.name = name || 'tiger'
}

Tiger.prototype = new Animal()
Tiger.prototype.constructor = Tiger;