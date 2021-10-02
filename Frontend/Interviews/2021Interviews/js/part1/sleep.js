function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

/*sleep(1500).then(() => {
    console.log(123)
})*/

async function waitPrint() {
    await sleep(2000);
    console.log('hehe')
}

function* sleep2(time) {
    yield new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

sleep2(1000).next().value.then(() => {
    console.log(123)
})


// waitPrint();
