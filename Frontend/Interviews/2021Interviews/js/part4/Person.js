class PersonGenerator {
    taskQueue = [];

    constructor(name) {
        this.taskQueue.push(() => this.sayHi(name));
        this.runTaskQueue();
    }

    nextTask = () => {
        if (this.taskQueue.length > 0) {
            const task = this.taskQueue.shift();
            if (typeof task === "function") {
                task();
                this.nextTask();
            }
            if (typeof task === "number") {
                console.log(`Sleep ${task} seconds \n`);
                setTimeout(() => this.nextTask(), task * 1000);
            }
        }
    };

    runTaskQueue = () => {
        setTimeout(() => this.nextTask());
    };

    sayHi(name) {
        console.log(`Hi! This is ${name}! \n`);
        return this;
    }

    sleep(seconds) {
        this.taskQueue.push(seconds);
        return this;
    }

    sleepFirst(seconds) {
        this.taskQueue.splice(-1, 0, seconds);
        return this;
    }

    eat(food) {
        this.taskQueue.push(() => console.log(`Eat ${food}~ \n`));
        return this;
    }
}

const Person = name => new PersonGenerator(name);

Person("Li");
// 输出： Hi! This is Li!

Person("Dan").sleep(10).eat("dinner");
// 输出：
// Hi! This is Dan!
// 等待10秒..
// Wake up after 10
// Eat dinner~

Person("Jerry").eat("dinner").eat("supper");
// 输出：
// Hi This is Jerry!
// Eat dinner~
// Eat supper~

Person("Smith").sleepFirst(5).eat("supper");
// 输出：
// 等待5秒
// Wake up after 5
// Hi This is Smith!
// Eat supper
