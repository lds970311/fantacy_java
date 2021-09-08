function insertSort(arr: Array<number>) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        let minIndex = -1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                minIndex = j
            }
        }
        if (arr[i] !== min) {
            let temp = arr[i];
            arr[i] = min;
            arr[minIndex] = temp;
        }
    }
    return arr
}

let arr1 = [1, 5, 4, 2, 3]
arr1 = insertSort(arr1)
console.log(arr1)