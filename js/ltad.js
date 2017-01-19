$(function(){
	$(".carousel").carousel({
		//改变切换的频率
		interval:2000,
	});
	//滚图按钮显示
	$(".slide").hover(
	  function () {
	   	$(".carousel-control").addClass("adlr");
	  },
	  function () {
	    $(".carousel-control").removeClass("adlr");
	  }
	);
});