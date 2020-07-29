
 var obox=document.getElementById('box');
  //var target=400;//目标点
 //var speed=10;//速度
 animation(800,10);
   function animation(target,speed){
     var current=parseFloat(getStyle(obox,'left'));//初始值
     var old=current;//记录初始位置
   
     var timer;
    (function fn(){//自执行函数
    	current+=speed;
    	timer=requestAnimationFrame(fn);//调用fn
    	if (current>=target||current<=old) {
    		//cancelAnimationFrame(timer);//清除
    		//current=target;
    		speed=-speed;
    	}
    	obox.style.left=current+'px';
    })();
   }

   animation();
  function getStyle(obj,attr){
  		return window.getComputedStyle?getComputedStyle(obj)[attr]:obj.currentStyle[attr];//获取样式返回//三目运算
  	
  	
  }
