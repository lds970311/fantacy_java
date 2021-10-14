//events模块
const EventEmitter = require('events')

const emitter = new EventEmitter(); //默认的事件总线

const myfunc = args => {
    console.log("listen click", args)
}

/**
 * 添加监听
 */
function addListener(): void {
    emitter.on('click', args => {
        myfunc(args)
    })
}

/**
 * 触发事件
 */
function emitEvent(): void {
    setTimeout(() => {
        emitter.emit('click', [1, 2, 3, 4])
    }, 2000)
}

/**
 * 移除事件
 */
function cancelEvent() {
    emitter.off('click', myfunc)
}

function getEmitterName() {
    console.log(emitter.eventNames()) //[ 'click' ]
    console.log(emitter.getMaxListeners()) //10
    console.log(emitter.listenerCount('click'))  //1
    console.log(emitter.listeners("click")) //[ [Function (anonymous)] ]
}

addListener()
emitEvent()
// cancelEvent()

getEmitterName()
