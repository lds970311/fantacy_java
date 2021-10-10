/**
 * 众所周知水在低于  摄氏度的时候是固态，在高于  摄氏度的时候是液态，在等于  摄氏度的时候是可能是液态也可能是固态还可能是固液混合

 现在有个加热工具，加热  秒可以使冰升温  摄氏度。

 加热  秒可以使  摄氏度的冰变成  摄氏度的水。

 加热  秒可以使水升温  摄氏度。

 现在给出两个温度 ，请计算用这个加热工具将水从  摄氏度加热到  摄氏度所需要的时间。
 保证A不为零。
 */


function getTime(startTemp, endTemp, firstTime, secondTime, thirdTime) {
    if (startTemp <= 0) {
        return Math.abs(startTemp) * firstTime + secondTime + thirdTime * endTemp;
    }
    return thirdTime * (endTemp - startTemp);

}

let res = getTime(35, 92, 31, 50, 11)
console.log(res);
