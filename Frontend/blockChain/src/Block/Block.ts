//区块

const sha256 = require('crypto-js/sha256');
// @ts-ignore
const {formatDate} = require("../utils")


// @ts-ignore
class Block {
    // private _data: string //区块的数据
    private _previousHash: string //前一个区块的hash值
    private _hash: string //当前区块的hash值
    private _nonce: number
    private _transaction: Array<Object>;
    private _timestamp: string

    constructor(transaction: Array<Object>, previousHash: string = "") {
        this._transaction = transaction
        this._previousHash = previousHash
        this._hash = this.computeHash()
        this._nonce = 1; //随机数
        this._timestamp = formatDate(Date.now());
    }


    get nonce(): number {
        return this._nonce;
    }


    get timestamp(): string {
        return this._timestamp;
    }

    set timestamp(value: string) {
        this._timestamp = value;
    }

    set nonce(value: number) {
        this._nonce = value;
    }


    get transaction(): Array<Object> {
        return this._transaction;
    }

    set transaction(value: Array<Object>) {
        this._transaction = value;
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
        return sha256(JSON.stringify(this._transaction) + this._previousHash + this._nonce + this._timestamp).toString()
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
