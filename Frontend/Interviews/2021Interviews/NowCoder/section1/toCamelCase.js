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
    for (let i = 1; i < strArray.length; i++) {
        const word = strArray[i].charAt(0).toUpperCase() + strArray[i].substr(1);
        newStr += word;
    }
    return strArray[0] + newStr;
}


let res = cssStyle2DomStyle("font-size")

console.log(res);

let arr = [1, 2, 3, 4];
