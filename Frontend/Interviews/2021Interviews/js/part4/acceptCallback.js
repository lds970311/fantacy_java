function consumer(callback) {
    function myFunc() {
        console.log("123")
    }

    callback(myFunc)
}


let a;

consumer(cb => {
    a = cb
})

queueMicrotask(() => {
    a();
})


console.log("hehe")
