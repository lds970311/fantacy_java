/**
 * 写个函数，可以转化下划线命名到驼峰命名
 */
function UnderlineToHump(param) {
    let result = ""
    const strs = param.split("_");
    for (let strsKey in strs) {
        if (result.length === 0) {
            result += strs[strsKey].toLowerCase()
        } else {
            result += strs[strsKey].substring(0, 1).toUpperCase()
            result += strs[strsKey].substring(1).toLowerCase()
        }
    }
    return result;
}

let param = "dis_from_home"
let res = UnderlineToHump(param)
console.log(res);