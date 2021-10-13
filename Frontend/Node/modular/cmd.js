define(function (require, exports, module) {
    const name = "evan"
    const age = 19
    const say = function (name) {
        console.log(`hello ${name}`)
    }

    module.exports = {
        name,
        age,
        say
    }
})
