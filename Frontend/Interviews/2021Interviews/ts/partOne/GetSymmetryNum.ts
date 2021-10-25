const getSymmetryNum = function (start: number, end: number): void {
    start = start <= 11 ? 11 : start;
    for (let i = start; i < end; i++) {
        let initial = i + "";
        let handledStr = initial.split("").reverse().join("")
        if (initial === handledStr) {
            console.log(i)
        }
    }
}

getSymmetryNum(1, 10000)

