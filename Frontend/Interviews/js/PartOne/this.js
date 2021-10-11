// this面试题
/*(function () {
    var name = 222;
    var a = {
        name: 111,
        say: function () {
            console.log(this.name)
        }
    }

    var fun = a.say
    fun()
    a.say()

    var b = {
        name: 333,
        say: function (fun) {
            fun()
        }
    }
    b.say(a.say)
    b.say = a.say
    b.say()
})()*/


//剪头函数的this
/*
var x = 11
var obj = {
    x: 22,
    say: () => {
        console.log(this.x)
    }
}
obj.say()*/

var obj = {
    birthday: 1990,
    getAge: function () {
        var b = this.birthday;
        var fn = () => {
            return new Date().getFullYear() - this.birthday
        }
        return fn()
    }
}

console.log(obj.getAge());