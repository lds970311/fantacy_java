const worker = new Worker('WebWorker.js')
worker.onmessage = function (data) {
    console.log(data)
}
