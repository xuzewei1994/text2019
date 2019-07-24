const EventEmitter = require('events')

//方法的继承
class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()

//1.用 on
emitter.on('test',()=>{
	console.log('test fn1...')
})

//2.用 addListener
emitter.addListener('test',()=>{
	console.log('test fn2...')
})

//3.用 once(只能触发一次)
emitter.once('test',()=>{
	console.log('test fn3...')
})


emitter.emit('test')


//emitter.addListener和emitter.on(eventName, listener)是同一个方法
console.log(emitter.on == emitter.addListener)//true


//一个EventEmitter对象默认最大可以有10个监听,
//可以通过emitter.setMaxListeners(n)来设置最大监听数
emitter.setMaxListeners(10)

emitter.on('test',()=>{
	console.log('test fn1...')
})

emitter.on('test',()=>{
	console.log('test fn2...')
})

emitter.emit('test')



