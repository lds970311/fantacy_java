define(function (require, exports, module) {
    const cmd = require('./cmd');
    // console.log(cmd)
    console.log(cmd.name)
    console.log(cmd.age)

    cmd.say("hi")
})
