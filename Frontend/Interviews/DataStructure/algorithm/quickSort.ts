function quickSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array
    }
    let left: number[] = []
    let right: number[] = []
    let midIndex: number = Math.floor(array.length / 2)
    let midValue: number = array[midIndex]
    for (let i = 0; i < array.length; i++) {
        if (i === midIndex) {
            continue
        }
        if (array[i] < midValue) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return quickSort(left).concat(midValue, quickSort(right))
}

let array = [7, 4, 2, 9, 15, 11]


const num = quickSort(array);
console.log(num);
