const EventEmitter = require('events')

//方法的继承
class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()

emitter.on('test',(arg1,arg2)=>{
	console.log('get arg1:',arg1)
	console.log('get arg2:',arg2)
})

//emitter.emit(eventName[, ...args])
emitter.emit('test','aa','bb')

//和浏览器端的事件不同,传入参数不用数组而是参数列表
const args = ['bb','cc']
emitter.emit('test',...args)


