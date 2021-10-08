/**
 * FED9 邮箱字符串判断
 * 判断输入是否是正确的邮箱格式
 */

function isAvailableEmail(sEmail) {
    var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return ePattern.test(sEmail)
}

isAvailableEmail()

function indexOf(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

let number = indexOf([1, 2, 3, 4], 3);
console.log(number);
