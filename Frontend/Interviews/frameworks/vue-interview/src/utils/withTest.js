//CREATE AT: 2021-11-15
const obj = {
    a: 100,
    b: 200
}

with (obj) {
    console.log(a) //100
    console.log(b)//200
}
