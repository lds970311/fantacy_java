const quickSort = function (array) {
    if (array.length <= 1) {
        return array;
    }
    let left = [];
    let right = [];
    let midIndex = Math.floor(array.length / 2);
    let midValue = array[midIndex];
    for (let i = 0; i < array.length; i++) {
        if (i === midIndex) {
            continue;
        }
        if (array[i] < midValue) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat(midValue, quickSort(right));
}

let array = [7, 4, 2, 9, 15, 11];
let num = quickSort(array);
console.log(num);
