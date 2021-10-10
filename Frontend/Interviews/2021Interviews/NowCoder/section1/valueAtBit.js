/**
 * FED48 二进制转换
 *  获取数字 num 二进制形式第 bit 位的值。注意：
 *   1、bit 从 1 开始
 *   2、返回 0 或 1
 *   3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1
 */

function valueAtBit(num, bit) {
    let s = num.toString(2);
    return s[s.length - bit]
}

console.log(valueAtBit(128, 8));


//转化成10进制

function base10(str) {
    let num = parseInt(str, 2);
    console.log(num);
}

base10(11000000)


/**
 *
 *FED50 二进制转换FED50 二进制转换
 *      将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位
 * @param num
 * @returns {string}
 */
function convertToBinary(num) {
    let str = num.toString(2)
    let appendStr = ""
    if (str.length < 8) {
        for (let i = 0; i < 8 - str.length; i++) {
            appendStr += "0";
        }
    }
    return appendStr + str;
}

console.log(convertToBinary(65));