//(a ==1 && a== 2 && a==3) 可能为 true 吗？
var a = {
    i: 1,
    valueOf: function () {
        return a.i++
    }
}

console.log(a == 1 && a == 2 && a == 3) //true
