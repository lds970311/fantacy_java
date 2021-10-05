//交易类
// @ts-ignore
const {formatDate} = require("../utils")

// @ts-ignore
class Transaction {
    private _from: string
    private _to: string
    private _amount: number
    private _timestamp: string


    constructor(from: string, to: string, amount: number, timestamp: number) {
        this._from = from;
        this._to = to;
        this._amount = amount;
        this._timestamp = formatDate(timestamp);
    }

    get from(): string {
        return this._from;
    }

    set from(value: string) {
        this._from = value;
    }

    get to(): string {
        return this._to;
    }

    set to(value: string) {
        this._to = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }


    get timestamp(): string {
        return this._timestamp;
    }

    set timestamp(value: string) {
        this._timestamp = value;
    }
}

module.exports = {
    Transaction
}
