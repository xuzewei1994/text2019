const {Readable} = require('stream')

class Reader extends Readable{
	//模拟底层数据的读取
	constructor(){
		super()
		this.index = 0
	}

	_read(){
		this.index++
		if(this.index>5){
			this.push(null)
		}else{
			this.push(this.index+'')
		}
	}
}

const reader = new Reader()

//从可读流中读取数据的方法
//1.初始化一个变量用来保存数据

let body = ''
//3.监听end事件,在回调函数中使用保存数据的变量
reader.on('end',()=>{
	console.log('end...')
	console.log('read data',body)
})


//2.监听data事件,将每一次获取的数据段累加
reader.on('data',(chunk)=>{
	// console.log('chunk:',chunk)
	body += chunk
}) 

//可读流中的数据->标准的输出设备(可写流)
reader.pipe(process.stdout)
