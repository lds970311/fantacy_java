/**
 * 实现颜色转换 'rgb(255, 255, 255)' -> '#FFFFFF'
 */
function rgb2hex(sRgb: string) {
    let pattern: RegExp = /^(rgb|RGB)\(\s*(\d{1,3})\s*,\s*(\d{1,3}\s*),\s*(\d{1,3})\s*\)$/
    return sRgb.match(pattern)
}

rgb2hex('rgb(255, 255, 255)')


//replace + 利用 split

function convert(sRgb: string): string {
    let result: string[] = sRgb.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',')
    let res = "#";
    for (let i = 0; i < result.length; i++) {
        let temp: string = Number(result[i]).toString(16)
        res += temp.toUpperCase()
    }
    return res
}

console.log(convert('rgb(125, 25, 23)')); //
