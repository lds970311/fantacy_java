import {Buffer} from "buffer";

function createBuffer(): void {
    let str: string = "hello"
    let str1: string = "拜拜"
    // const buffer: Buffer = new Buffer(str)
    const buffer: Buffer = Buffer.from(str, 'utf8')
    const buffer1: Buffer = Buffer.from(str1, 'utf8')

    console.log(buffer);
    console.log(buffer1); //<Buffer e6 8b 9c e6 8b 9c>
}

// createBuffer()


function bufferEncode() {
    const buf: Buffer = Buffer.from("bye bye world", "utf16le");
    console.log(buf)
    console.log(buf.toString("utf8"));
}

// bufferEncode()


function bufferAlloc() {
    //通过alloc创建buffer
    const buffer: Buffer = Buffer.alloc(1024, 0, "utf8");
    buffer[0] = 21
    console.log(buffer)
}

bufferAlloc()
