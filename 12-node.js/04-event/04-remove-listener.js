const EventEmitter = require('events')

//方法的继承
class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()

emitter.on('test',listener)

emitter.off('test',listener)

emitter.emit('test')


