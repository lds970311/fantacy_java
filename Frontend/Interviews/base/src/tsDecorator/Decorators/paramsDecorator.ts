const parseConf: Array<any> = [];

class Modal {
    @parseFunc
    public addOne(@parse('number') num: any) {
        console.log('num:', num);
        return num + 1;
    }
}

// 在函数调用前执行格式化操作
function parseFunc(target: any, name: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        for (let index = 0; index < parseConf.length; index++) {
            const type = parseConf[index];
            console.log(type);
            switch (type) {
                case 'number':
                    args[index] = Number(args[index]);
                    break;
                case 'string':
                    args[index] = String(args[index]);
                    break;
                case 'boolean':
                    args[index] = String(args[index]) === 'true';
                    break;
            }
            return originalMethod.apply(this, args);
        }
    };
    return descriptor;
}

// 向全局对象中添加对应的格式化信息
function parse(type: string) {
    return function (target: any, name: string, index: number) {
        parseConf[index] = type;
        console.log(`parseConf[index]: ${index}`, type);
    };
}

let modal = new Modal();
console.log(modal.addOne('10')); // 11
