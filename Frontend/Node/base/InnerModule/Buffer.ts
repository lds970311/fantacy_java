function createBuffer(): void {
    let str: string = "hello"
    let str1: string = "拜拜"
    // const buffer: Buffer = new Buffer(str)
    const buffer: Buffer = Buffer.from(str, 'utf8')
    const buffer1: Buffer = Buffer.from(str1, 'utf8')

    console.log(buffer);
    console.log(buffer1); //<Buffer e6 8b 9c e6 8b 9c>
}

createBuffer()
