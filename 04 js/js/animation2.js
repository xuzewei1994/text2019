<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>137-动画-匀速动画-封装函数.html</title>
	<style>
		*{
			margin: 0;
			padding: 0;
		}
		.container{
			width: 400px;
			margin:50px auto;
		}
		.box{
			width: 100px;
			height: 100px;
			margin-top: 20px;
			background: red;
		}
		.box:last-child{
			opacity: 0.2;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="box" id="box1"></div>
		<div class="box" id="box2"></div>
		<div class="box" id="box3"></div>
	</div>
</body>
<script>
	function animation(obj,attr,iTarget){
		var iSpeed = 0;
		//防止用户多次点击
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			//获取当前该属性的值
			var currentVal = parseFloat(getComputedStyle(obj,false)[attr]);
			//处理透明度,将其转化为百分制数
			if(attr == "opacity"){
				currentVal = Math.round(currentVal*100);
			}
			//判断速度的取值
			iSpeed = (100 - currentVal)/10;
			iSpeed = iSpeed>0 ? Math.ceil(iSpeed) :Math.floor(iSpeed);
 			//动画的终止条件
			if(!iSpeed){
				//处理透明度和非透明度的取值
				if(attr == "opacity"){
					obj.style[attr] = iTarget/100;
				}else{
					obj.style[attr] = iTarget + "px";
				}
				//动画终止清除定时器
				clearInterval(obj.timer);
			}else{//动画不终止
				//处理透明度和非透明度的取值
				if(attr == "opacity"){
					obj.style[attr] = (currentVal + iSpeed)/100;
				}else{
					obj.style[attr] = currentVal + iSpeed + "px";
				}
			}
		},30)
	}
</script>
</html>