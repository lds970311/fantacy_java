const o1 = {
    name: "abc",
    age: 12,
    cars: [{
        brand: "toyota",
        price: 100,
        years: 5
    }, {
        brand: "audi",
        price: 54,
        years: 6
    }]
}

const o2 = {
    name: "abc",
    age: 12,
    cars: [{
        brand: "toyota",
        price: 100,
        years: 5
    }, {
        brand: "audi",
        price: 54,
        years: 6
    }]
}

console.log(JSON.stringify(o1) === JSON.stringify(o2));

function isEqualObject(o1, o2) {
    const o1keys = Object.keys(o1);

    const o2keys = Object.keys(o2);

    if (o2keys.length !== o1keys.length) return false;

    for (let i = 0; i <= o1keys.length - 1; i++) {

        let key = o1keys[i];

        if (!o2keys.includes(key)) return false;

        if (o2[key] !== o1[key]) return false;
    }

    return true;
}

console.log(isEqualObject(o1, o2))