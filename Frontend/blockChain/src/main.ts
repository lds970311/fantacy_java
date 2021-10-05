export {}
// @ts-ignore
const Block = require("./Block/Block.ts");
const Chain = require("./Chain/Chain.ts")
const {Transaction} = require("./Transaction/Transaction.ts")
const {formatDate} = require("./utils")

//创建transaction
const t1 = new Transaction("Tom", "Jack", 5000, Date.now());
const t2 = new Transaction("Lee", "wang", 6000, Date.now());
const t3 = new Transaction("Sam", "evan", 5620, Date.now());
const t4 = new Transaction("Herry", "Naruto", 5510, Date.now());
console.log(formatDate(t1.timestamp))


const coin = new Chain()
coin.addTransaction(t2)
coin.addTransaction(t4)
coin.mineTransactionPool("addressThree")

console.log(coin)
console.log(coin.chain[1])

