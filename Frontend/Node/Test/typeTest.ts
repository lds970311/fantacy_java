import EventEmitter = require("events");

const emitter: EventEmitter = new EventEmitter()


emitter.on("hehe", function () {
    console.log("123")
})


emitter.emit("hehe")
