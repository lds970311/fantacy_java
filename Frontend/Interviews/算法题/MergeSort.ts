function mergeSort(array: Array<any>, left: number, right: number): Array<any> | null {
    if (left === right) {
        return
    }
    let mid = Math.floor((left + right) / 2)
    mergeSort(array, left, mid)
    mergeSort(array, mid + 1, right)
    let help = []
    let i = 0;
    let p1 = left;
    let p2 = right
    while (p1 <= mid && p2 <= right) {
        help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++]
    }

    while (p1 <= mid) {
        help[i++] = array[p1++]
    }

    while (p2 <= right) {
        help[i++] = array[p2++]
    }

    for (let j = 0; j < help.length; j++) {
        array[left + i] = help[i]
    }
    return array;
}

let a = [3, 1, 2, 8, 9, 7, 6]
mergeSort(a, 0, a.length)
console.log(a);