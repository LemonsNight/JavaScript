//盒子布局
// ["T","R","B","L","TR","TL","BR","BL"];
//cursor: s-resize;鼠标指针
var obox=document.getElementById('box');
 var obox2=document.getElementById('box2');
 
 boxresize(obox);
boxresize(obox2);
 //封装一个函数，让所有元素都适应
 function boxresize(obj){//数组里面放对象
 	var divarr=[
 	{
 		classname:"T",
 		eventfn:[0,1]
 		//[宽,高]
 		//*0表示没有,1,-1表示方向
 	},
 	{
 		classname:"R",
 		eventfn:[-1,0]
 	},
 	{
 		classname:"B",
 		eventfn:[0,-1]
 	},
 	{
 		classname:"L",
 		eventfn:[1,0]
 	},
 	{
 		classname:"TL",
 		eventfn:[1,1]
 	},
 	{
 		classname:"TR",
 		eventfn:[-1,1]
 	},
 	{
 		classname:"BL",
 		eventfn:[1,-1]
 	},
 	{
 		classname:"BR",
 		eventfn:[-1,-1]
 	}

 	];
 	var wrap=document.createElement("div");
 	wrap.className="boxresize";
 	for(var i=0;i<8;i++){
 		var div=document.createElement("div");//创建div节点
 		div.index=i;
 		div.className=divarr[i].classname;//添加class名称
 		div.onmousedown=function(e){
 			e=e||window.event;
 			fn(e,divarr[this.index].eventfn)
 		};
 		wrap.appendChild(div);//将div添加到类名为boxresize里面

 	}
    obj.appendChild(wrap);
    document.onmouseup=function(ev){
 	this.onmousemove=null;			
 }

function fn(e,a){
	
 	var y=e.clientY;
 	var x=e.clientX;
 	var cssobj=obj.currentStyle||getComputedStyle(obj);
 	var h=parseFloat(cssobj.height);//初始的高度
 	var w=parseFloat(cssobj.width);
 	var t=obj.offsetTop;//初始top
 	var l=obj.offsetLeft;//初始left
   document.onmousemove=function(e){
  e=e||window.event;
   	var nx=e.clientX;
   	var ny=e.clientY;
   	var y_=ny-y;//y值变化量
   	var x_=nx-x;

   	var nh=h-y_*a[1];
   	var nw=w-x_*a[0];
   	// var nt=a[1]===1?t+y_*a[1]:t;
   	var nt=t+y_*a[1];
   	// var nl=a[0]===1?l+y_*a[0]:l;
   	var nl=l+x_*a[0];
   	if (nh<=10) {
   		nh=10;
   		nt=t+h-10;
   		//nt=a[1]===1?t+h-10:t;
   	}
   	if (nw<=10) {
   		nw=10;
   		nl=l+w-10;
   		//nl=a[0]===1?l+w-10:l;
   	}
   	obj.style.height=nh+"px";
   	obj.style.width=nw+"px";
   	
   	obj.style.left=(a[0]===1?nl:l)+"px";
   	obj.style.top=(a[1]===1?nt:t)+"px";
   	
   }
} 
 }


