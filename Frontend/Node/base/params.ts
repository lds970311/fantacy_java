//node传递参数

console.log(process.argv)
const info = process.argv.slice(2)

console.clear()
info.forEach(args => console.log(args))


