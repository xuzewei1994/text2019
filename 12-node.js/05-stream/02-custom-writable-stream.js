const {Writable} = require('stream')

class CustomWriter extends Writable{
	_write(chunk,encoding,callback){
		console.log('chunk:',chunk.toString())
		console.log('encoding:',encoding)
		callback && callback()
	}
}

const writer = new CustomWriter()

writer.on('finish',()=>{
	console.log('write done...')
})

writer.write('hello','',()=>{
	console.log('after write hello')
})

writer.write('good')

writer.end('yes')
// chunk: hello
// encoding: buffer
// chunk: good
// encoding: buffer
// chunk: yes
// encoding: buffer
// after write hello
// write done...







