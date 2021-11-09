const myAjax = function (url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url)
        xhr.send(data)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(xhr.responseText)
                }
            }
        }
    })
}

myAjax("https://mock.mengxuegu.com/mock/6188d0e54c5d9932f7e7576b/mock_test/info").then(res => {
    console.log(res);
})
