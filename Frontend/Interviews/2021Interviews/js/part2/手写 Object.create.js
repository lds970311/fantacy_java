//思路：将传入的对象作为原型

function CreatObj(obj) {
    function F() {
    }

    F.prototype = obj
    return new F()
}

let a = {
    name: "hello",
    age: 14
}

let f = CreatObj(a);
console.log(f.name); //hello


