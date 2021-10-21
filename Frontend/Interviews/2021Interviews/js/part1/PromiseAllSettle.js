const formatSettledResult = (success, value) =>
    success
        ? {status: "fulfilled", value}
        : {status: "rejected", reason: value};

Promise.all_settled = function (iterators) {
    const promises = Array.from(iterators);
    const num = promises.length;
    const resultList = new Array(num);
    let resultNum = 0;

    return new Promise((resolve) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    resultList[index] = formatSettledResult(true, value);
                    if (++resultNum === num) {
                        resolve(resultList);
                    }
                })
                .catch((error) => {
                    resultList[index] = formatSettledResult(false, error);
                    if (++resultNum === num) {
                        resolve(resultList);
                    }
                });
        });
    });
};

const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);
Promise.all_settled([resolved, rejected]).then((results) => {
    console.log(results);
});

const person = {name: "yd"};
Object.defineProperty(person, "age", {value: 21});
person.age = 18;
console.log(person);
console.log(Object.keys(person));
