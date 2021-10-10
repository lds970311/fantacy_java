/**
 * FED11 将字符串转换为驼峰格式
 * 输入：
 'font-size'
 复制
 输出：
 fontSize
 */

function cssStyle2DomStyle(sName) {
    if (sName.startsWith('-')) {
        sName = sName.substr(1);
    }
    let strArray = sName.split("-");
    let newStr = "";
    for (let i = 0; i < strArray.length; i++) {
        if (i === 0) {
            newStr += strArray[i];
        } else {
            let substr = strArray[i]
            let finalStr = substr[0].toUpperCase() + substr.slice(1)
            newStr += finalStr
        }
    }
    return newStr;
}


let res = cssStyle2DomStyle("font-size")

console.log(res);

let arr = [1, 2, 3, 4];
