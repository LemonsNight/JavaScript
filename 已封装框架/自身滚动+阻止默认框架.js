addWheelEvent(obox,function(e,d){
	e=e||window.event;
	//�ж�d�������Ϳ���֪�����ַ���
	
   
    return false;
});


function addWheelEvent(obj,efn){
	//�ж�IE8���Ƿ�IE8
	if (document.addEventListener) {
		//������Ƿǻ��
		var odiv=document.createElement("div");
	   if (odiv.onmousewheel===null) {
	   	//null�ǻ��
	   	obj.addEventListener("mousewheel",fn,false);
	   }
	   else{
	   	//undefined���
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