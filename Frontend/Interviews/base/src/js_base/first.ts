class First {
    private readonly _name: string
    private readonly _age: number


    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }


    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }
}

export default First
