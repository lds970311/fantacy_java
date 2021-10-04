/**
 *  用Promise实现图片的异步加载
 */

function loadImageAsync(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
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
    })
}

loadImageAsync("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F08%2F19%2F1457b6a76c7756c.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635866903&t=66aa2cbb62e1c06536b67796337c72b1").then(res => {
    console.log(res);
}).catch(error => {
    console.log(error);
})
