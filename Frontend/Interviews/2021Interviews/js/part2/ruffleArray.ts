//实现数组的乱序输出
// @ts-ignore
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 9, 11, 15, 29, 18]

function ruffle(arr: number[]): void {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
        let temp = arr[randomIndex];
        arr[randomIndex] = arr[i]
        arr[i] = temp
    }
}


for (let i = 0; i < 20; i++) {
    // @ts-ignore
    ruffle(arr)
    console.log(arr);
}
