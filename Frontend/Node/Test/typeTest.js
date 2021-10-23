"use strict";
exports.__esModule = true;
var EventEmitter = require("events");
var emitter = new EventEmitter();
emitter.on("hehe", function () {
    console.log("123");
});
emitter.emit("hehe");
