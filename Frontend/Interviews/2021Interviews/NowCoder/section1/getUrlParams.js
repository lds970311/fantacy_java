/**
 * 获取 url 中的参数
 1. 指定参数名称，返回该参数的值 或者 空字符串
 2. 不指定参数名称，返回全部的参数对象 或者 {}
 3. 如果存在多个同名参数，则返回数组
 4. 不支持URLSearchParams方法
 */

function getUrlParam(sUrl, sKey) {
    let params = sUrl.split("?")[1];
    let keys = params.split("&");
    let result = [];
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i].split("=")[0];
        let value = keys[i].split("=")[1];
        if (key === sKey) {
            result.push(value);
        }
    }
    return result;
}

let urlParam = getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe", 'key');
console.log(urlParam)