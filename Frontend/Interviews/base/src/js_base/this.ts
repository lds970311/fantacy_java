const person = {
    name: "zhangsan",
    sayhi() {
        console.log(this)
    },
    wait() {
        setTimeout(function () {
            // @ts-ignore
            console.log(this) //window
        })
    },
    waitAgain() {
        setTimeout(() => {
            console.log(this) //person
        })
    }
}

person.wait()
person.waitAgain()
