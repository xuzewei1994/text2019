const EventEmitter = require('events')

//方法的继承
class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()

//监听事件
emitter.on('test',()=>{
	console.log('test fn...')
})

//触发事件
emitter.emit('test')





