class CircleQueue {
    constructor(length) {
        this.queue = new Array(length + 1);
        this.first = 0;
        this.last = 0;
        this.size = 0;
    }
    enQueue(item) {
        if (this.first === (this.last + 1) % this.queue.length) {
            this.resize(this.getLength() * 2 + 1);
        }
        this.queue[this.last] = item;
        this.size++;
        this.last = (this.last + 1) % this.queue.length;
    }
    deQueue() {
        if (this.isEmpty()) {
            throw new Error("queue is empty!");
        }
        let ele = this.queue[this.first];
        this.queue[this.first] = null;
        this.first = (this.first + 1) % this.queue.length;
        this.size--;
        if (this.size === this.getLength() / 4 && this, this.getLength() / 2 !== 0) {
            this.resize(this.getLength() / 2);
        }
        return ele;
    }
    getHeader() {
        if (!this.isEmpty()) {
            return this.queue[this.first];
        }
        else {
            throw new Error("queue is empty");
        }
    }
    isEmpty() {
        return this.size === 0;
    }
    getLength() {
        return this.queue.length - 1;
    }
    getSize() {
        return this.size;
    }
    resize(newLength) {
        let queue = new Array(newLength);
        for (let i = 0; i < this.size; i++) {
            queue[i] = this.queue[(i + this.first) % this.queue.length];
        }
        this.queue = queue;
        this.first = 0;
        this.last = this.size;
    }
}
let circleQueue = new CircleQueue(4);
circleQueue.enQueue(1);
circleQueue.enQueue(3);
circleQueue.enQueue(5);
console.log(circleQueue.deQueue());
console.log(circleQueue.getHeader());
console.log(circleQueue.getSize());
//# sourceMappingURL=CirclrQueue.js.map