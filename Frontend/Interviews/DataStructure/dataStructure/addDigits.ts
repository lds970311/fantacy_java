/**
 *   258. 各位相加 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
 */


function addDigits(num: number): number {
    if (num < 10) {
        return num;
    }
    let result = getSum(num);
    while (result > 9) {
        result = getSum(result)
    }
    return result;
}


function getSum(num: number) {
    let s = num + ""
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        result += Number(s[i])
    }
    return result
}


console.log(addDigits(38));
