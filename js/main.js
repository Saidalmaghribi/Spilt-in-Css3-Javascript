document.addEventListener("DOMContentLoaded" ,function(){

	var wrap=document.getElementById('wrapper');
	var topLayer=wrap.querySelector(".top");
	var handle=wrap.querySelector(".handle");
	var skew=0;
	var delta=0;

	if (wrap.className.indexOf("skwed")!=-1) {
		skew=1000;
	}
  wrap.addEventListener("mousemove",function(e){

   delta=(e.clientX - window.innerWidth /2)*0.5;
   handle.style.left=e.clientX + delta + "px";
   topLayer.style.width=e.clientX + skew + delta + "px";
   
   

  })



})