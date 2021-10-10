/**
 *  实现一个版本号对比函数，传入三个参数，分别为第一个版本号、关系、第二个版本号，返回一个布尔值，来判定输入的关系是否正确
 */

function compareVersion(verA: string, operator: string, verB: string): boolean {
    //  补充逻辑
    let v1 = verA.split(".")
    let v2 = verB.split(".")
    while (v1.length && v2.length) {
        let c1 = v1.pop()
        let c2 = v2.pop()
        if (c1 !== c2) {
            // @ts-ignore
            return operator === '>' ? (c1 > c2) : (c1 < c2)
        }
    }
    if (v1.length) {
        return operator === '>'
    } else if (v2.length) {
        return operator === '<'
    } else {
        return operator === '='
    }
}


console.log(compareVersion('4.0.1.0', '=', '0.4.1.0'));  // false
console.log(compareVersion('4.0.1.0', '>', '4'));    // true(0417修正)
console.log(compareVersion('4.0.1.0', '<', '4.1.0'));
// true

