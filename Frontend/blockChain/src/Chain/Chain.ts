// @ts-ignore
const Block = require("../Block/Block")

//区块的链
class Chain {
    private _chain: Array<Block>;
    private _difficulty: number

    constructor() {
        this._chain = [this.bigBang()]
        this._difficulty = 4; //当前区块链的难度系数
    }

    bigBang() {
        //生成创世区块
        return new Block("Ancestor Block", "")
    }

    get chain(): Array<Block> {
        return this._chain;
    }

    getLastBlock(): Block {
        return this._chain[this._chain.length - 1]
    }


    get difficulty(): number {
        return this._difficulty;
    }

    set difficulty(value: number) {
        this._difficulty = value;
    }

    /**
     * 把区块添加到区块链上
     * @param newBlock : 新区块
     */
    addBlockToChain(newBlock: Block) {
        //获取前一个区块的hash
        const pHash = this.getLastBlock().hash
        newBlock.previousHash = pHash
        //newBlock的hash需要满足一个区块链设置的条件(挖矿)
        newBlock.mine(this.difficulty);
        // newBlock.hash = newBlock.computeHash();
        this._chain.push(newBlock)
    }

    /**
     * 判断当前的区块数据是否
     * @param block
     */
    isValidBlock(block: Block): boolean {
        return block.hash === block.computeHash()
    }

    /**
     * 验证链是否合法
     */
    validateChain(): boolean {
        if (this._chain.length === 1) {
            return this.isValidBlock(this._chain[0])
        }
        //如果链上有多个区块
        for (let i = 1; i < this._chain.length; i++) {
            const currentBlock = this._chain[i];
            const previousBlock = this._chain[i - 1];
            //验证当前区块的数据是否被篡改
            if (this.isValidBlock(currentBlock)) {
                console.log(`编号为${i + 1}的区块数据已经被篡改!`)
                return false;
            }
            //验证当前区块的hash是否=== previousHash
            if (currentBlock.previousHash !== previousBlock.hash) {
                console.log(`${i - 1}和${i}间的链断裂!`)
                return false
            }
        }
        return true
    }
}

module.exports = Chain
