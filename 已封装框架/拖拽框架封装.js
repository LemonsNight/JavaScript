var obox=document.getElementById('box');
 //鼠标按下
  box.onmousedown=function(ev){
  	var ev=ev||window.event;
  	var x1=ev.pageX;
  	var y1=ev.pageY;
  	var l=this.offsetLeft;//记录当前的坐标值
  	var t=this.offsetTop;
  	document.onmousemove=function(ev){
  		var ev=ev||window.event;
  		var x2=ev.pageX;
  		var y2=ev.pageY;
  		//实际坐标=当前坐标-开始坐标+按下时的left值
  		obox.style.left=(x2-x1+l)+'px';
  		obox.style.top=(y2-y1+t)+'px';
  	}
  	document.onmouseup=function(){
  		this.onmousedown=null;
  		this.onmousemove=null;
  	}
  }