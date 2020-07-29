addWheelEvent(obox,function(e,d){
	e=e||window.event;
	//判断d的正负就可以知道滚轮方向
	
   
    return false;
});


function addWheelEvent(obj,efn){
	//判断IE8还是非IE8
	if (document.addEventListener) {
		//火狐还是非火狐
		var odiv=document.createElement("div");
	   if (odiv.onmousewheel===null) {
	   	//null非火狐
	   	obj.addEventListener("mousewheel",fn,false);
	   }
	   else{
	   	//undefined火狐
	   	obj.addEventListener("DOMMouseScroll",fn,false);
	   }
	}else{
		obj.attachEvent("onmousewheel",fn);
	}

function fn(e){
     if ( efn.call(obj , e = e || window.event , e.wheelDelta/120 || -e.detail/3) === false ){
       e.preventDefault && e.preventDefault();
	return false;
                    }

}
}