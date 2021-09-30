/**
 * 326. 3的幂
 * 给定一个整数，写一个函数来判断它是否是 3的幂次方。如果是，返回 true ；否则，返回 false 。

 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x
 */


function isPowerOfThree(n: number): boolean {
    if (n % 3 !== 0) {
        return false;
    }
    let times = 0;
    while (true) {
        if (3 ** times >= n) {
            break;
        }
        times++;
    }
    return !(3 ** times !== n && 3 ** (times + 1) !== n);
}


let b1 = isPowerOfThree(19);
console.log(b1);
