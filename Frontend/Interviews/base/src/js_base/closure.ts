function create() {
    let a = 100
    return function () {
        console.log(a)
    }
}

let fn = create()
let a = 200;
fn() // 100


//函数作为参数
function print(fn: Function): void {
    let b: number = 200;
    fn() //100
}

let b = 100;

function fn1() {
    console.log(b)
}


print(fn1)
