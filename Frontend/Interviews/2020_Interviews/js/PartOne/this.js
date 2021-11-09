// this面试题
(function () {
    var name = 222;
    var a = {
        name: 111,
        say: function () {
            console.log(this.name)
        }
    }
    // console.log(this) //window; global
    var fun = a.say
    fun() //undefined
    a.say() //111

    var b = {
        name: 333,
        say: function (fun) {
            fun()
        }
    }
    b.say(a.say) //undefined
    b.say = a.say
    b.say() //333
})()


//剪头函数的this
var x = 11
var obj = {
    x: 22,
    say: () => {
        console.log(this)
        console.log(this.x)
    }
}
obj.say()

var obj1 = {
    birthday: 1990,
    getAge: function () {
        var b = this.birthday;
        var fn = () => {
            return new Date().getFullYear() - this.birthday
        }
        return fn()
    }
}

console.log(obj1.getAge());
