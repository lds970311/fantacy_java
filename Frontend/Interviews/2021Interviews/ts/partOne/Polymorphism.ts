interface IUsb {
    transferData(): void
}

class Disk implements IUsb {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    transferData(): void {
        console.log(`${this.name} is transfer`)
    }
}


class Phone implements IUsb {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    transferData(): void {
        console.log(`${this.name} is transfer`)
    }
}


class Computer {
    transfer(usb: IUsb) {
        usb.transferData()
    }
}

const computer = new Computer();
const disk = new Disk("disk");
const phone = new Phone("iPhone");

computer.transfer(disk);
computer.transfer(phone);