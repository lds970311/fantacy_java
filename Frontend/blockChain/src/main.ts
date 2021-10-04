export {}
// @ts-ignore
const Block = require("./Block/Block.ts");
const Chain = require("./Chain/Chain.ts")

let myBlock = new Block("transfer 10 dollars", "123456789");
const myBlock1 = new Block("transfer 1000 dollars to Tom");

const chain = new Chain()
chain.addBlockToChain(myBlock)
chain.addBlockToChain(myBlock1)


//篡改数据
// myBlock.data = "transfer 50 dollars"
// chain.chain[2].previousHash = chain.chain[2].computeHash()
chain.chain[2].data = "转账300元"
chain.chain[2].mine(4);
console.log(chain)
//测试区块是否合法
console.log(chain.validateChain());


