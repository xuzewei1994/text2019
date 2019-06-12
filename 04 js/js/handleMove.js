		var t = ev.clientY - disY;
		function handleMove(){
			if(t < 0){
				t = 0;
			}else if(t > oScroll.offsetHeight - oBox.offsetHeight){
				t = oScroll.offsetHeight - oBox.offsetHeight; 
			}
			var scale = t / (oScroll.offsetHeight - oBox.offsetHeight);
			oTxt.style.top = -(oTxt.offsetHeight - oContent.offsetHeight) * scale + "px";
			oBox.style.top = t + "px";
		}