/**
 * 科学家正在计划利用  行星上的一个研究模块进行一项重要的测量实验，测量共分为两次进行。

 因为宇宙中有多种不确定因素，科学家们已经确定了最佳测量的时间在  到  范围内。

 测量的要求是两次测量的间隔时间必须是  的倍数，现在请你帮助科学家计算测量方式的数量。

 即有多少对测量时间  和  满足 ，并且  是  的倍数。
 */

function getResult(start: number, end: number, factor: number): Array<Array<number>> | number {
    let res = [];
    if ((end - start) < factor) {
        return 0;
    }
    let initVal = start;
    let groups = Math.floor((end - start) / factor);
    for (let i = 1; i <= groups; i++) {
        let last = start + factor * i;
        for (; last <= end; last++) {
            res.push([initVal, last])
            initVal++;
        }
        initVal = start;
    }
    return res;
}

// @ts-ignore
const res1 = getResult(4, 9, 6)

console.log(res1);
