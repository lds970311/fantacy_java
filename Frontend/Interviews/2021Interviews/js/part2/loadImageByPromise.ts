/**
 *  用Promise实现图片的异步加载
 */

function loadImageAsync(url: string): Promise<any> {
    return new Promise(((resolve, reject) => {
        let image = new Image()
        image.src = url
        image.onload = () => {
            console.log("image request success")
            resolve(image)
        }
        image.onerror = (error) => {
            console.log("image request error")
            reject(error)
        }
    }))
}

loadImageAsync()
