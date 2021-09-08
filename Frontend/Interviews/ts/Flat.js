const list = [1, [2, [3, [4, 5]]]];
console.log(list.flat(Infinity));
const newList = [];
function flat(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flat(arr[i]);
        }
        else {
            newList.push(arr[i]);
        }
    }
}
flat(list);
console.log(newList);
const flatten = (arr) => {
    return arr.reduce((a, item) => {
        return a.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
};
console.log(flatten(list));
//# sourceMappingURL=Flat.js.map