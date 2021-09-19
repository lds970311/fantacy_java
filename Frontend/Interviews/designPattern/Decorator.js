/**
 * 装饰模式
 */
function readonly(target, key, descriptor) {
    descriptor.writeable = false;
    return descriptor;
}

@readonly
class Man {
    name = "naruto"
}

let m = new Man()
m.name = "sasuke"

console.log(m.name)
