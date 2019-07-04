var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){

	//让后台拿到参数[Object: null prototype] { getData: 'handleBack' }
	var parm = url.parse(req.url,true).query;

	var handleBack = parm.getData;

	//定义一个数据包装成字符串并将它作为handleBack的方法返回给前台
	var data = '{name:"tom",age:18}'

	//将字符串包装成函数并返还前台
	res.end(handleBack + "(" +data+ ")");
});
server.listen(3001,"127.0.0.1",function(){
	console.log("server is running at http://127.0.0.1:3001");
});