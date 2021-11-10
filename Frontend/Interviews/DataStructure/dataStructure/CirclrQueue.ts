/**
 * 循环队列
 */

class CircleQueue<T> {
    private queue: Array<T | null>
    private first: number
    private last: number
    private size: number

    constructor(length: number) {
        this.queue = new Array(length + 1)
        this.first = 0;
        this.last = 0;
        this.size = 0;
    }

    /**
     * 入队
     * @param item
     */
    public enQueue(item: T) {
        if (this.first === (this.last + 1) % this.queue.length) {
            //队列已满
            this.resize(this.getLength() * 2 + 1)
        }
        this.queue[this.last] = item;
        this.size++;
        this.last = (this.last + 1) % this.queue.length
    }

    public deQueue(): T | null {
        if (this.isEmpty()) {
            throw new Error("queue is empty!");
        }
        let ele = this.queue[this.first];
        this.queue[this.first] = null;
        this.first = (this.first + 1) % this.queue.length;
        this.size--;
        //为了保证不浪费空间. 需要缩小容量
        if (this.size === this.getLength() / 4 && this, this.getLength() / 2 !== 0) {
            this.resize(this.getLength() / 2)
        }
        return ele;
    }

    public getHeader(): T | null {
        if (!this.isEmpty()) {
            return this.queue[this.first]
        } else {
            throw new Error("queue is empty")
        }
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    getLength(): number {
        return this.queue.length - 1
    }

    public getSize(): number {
        return this.size;
    }

    private resize(newLength: number) {
        let queue = new Array(newLength)
        for (let i = 0; i < this.size; i++) {
            queue[i] = this.queue[(i + this.first) % this.queue.length]
        }
        this.queue = queue;
        this.first = 0;
        this.last = this.size;
    }
}

let circleQueue = new CircleQueue<Number>(4);
circleQueue.enQueue(1)
circleQueue.enQueue(3)
circleQueue.enQueue(5)
console.log(circleQueue.deQueue())
console.log(circleQueue.getHeader())
console.log(circleQueue.getSize())
