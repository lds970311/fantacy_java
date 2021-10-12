// const Bar = require("./bar");
const {bar, message} = require("./Bar")
const Foo = require("./foo");

console.log(message)
console.log(Foo.name)

bar()
Foo.foo()
