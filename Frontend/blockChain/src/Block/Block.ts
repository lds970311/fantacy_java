//区块

const sha256 = require('crypto-js/sha256');

// @ts-ignore
class Block {
    private _data: string //区块的数据
    private _previousHash: string //前一个区块的hash值
    private _hash: string //当前区块的hash值
    private _nonce: number

    constructor(data: string, previousHash: string = "") {
        this._data = data
        this._previousHash = previousHash
        this._hash = this.computeHash()
        this._nonce = 1; //随机数
    }


    get nonce(): number {
        return this._nonce;
    }

    set nonce(value: number) {
        this._nonce = value;
    }

    get data(): string {
        return this._data;
    }

    set data(value: string) {
        this._data = value;
    }

    get previousHash(): string {
        return this._previousHash;
    }

    set previousHash(value: string) {
        this._previousHash = value;
    }

    get hash(): string {
        return this._hash;
    }

    set hash(value: string) {
        this._hash = value;
    }

    /**
     * 计算hash值
     */
    computeHash(): string {
        return sha256(this._data + this._previousHash + this._nonce).toString()
    }

    /**
     * 获取一个前面有difficulty个0的字符串
     * @param difficulty
     */
    getAnswers(difficulty: number) {
        let answer = "";
        for (let i = 0; i < difficulty; i++) {
            answer += '0'
        }
        return answer
    }

    /**
     * 挖矿, 计算出符合难度系数的hash
     */
    mine(difficulty: number) {
        while (true) {
            //一直计算hash. 直到前面有difficulty个0为止
            if (this.hash.substr(0, difficulty) !== this.getAnswers(difficulty)) {
                this._nonce++;
                this.hash = this.computeHash()
            } else {
                break
            }
        }
        console.log("挖矿结束", this.hash)
    }
}

module.exports = Block
