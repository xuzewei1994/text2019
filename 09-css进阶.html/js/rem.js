//根据屏幕的宽度来设置根元素的font-size
//1rem = 1个根元素的font-size
;(function(win,doc){
	//获取根元素
	var root  = doc.getElementsByTagName('html')[0];

	function refresh(){
		//获取视口的宽度
		var width = doc.body.clientWidth || doc.documentElement.clientWidth;

		var fontSize = width/10 + 'px';

		root.style.fontSize = fontSize;
	}
	//页面加载刷新
	win.addEventListener('DOMContentLoaded',refresh,false);

	//页面加载
	win.addEventListener('resize',refresh,false);

})(window,document)