while (1) {
    const num = Math.random()
    console.log(num)
    if (num > 0.8) {
        postMessage(num)
        break;
    }
}
