$(function(){
	$(".carousel").carousel({
		//改变切换的频率
		interval:2000,
	});
	$(".slide").hover(
	  function () {
	   	$(".carousel-control").addClass("adlr");
	  },
	  function () {
	    $(".carousel-control").removeClass("adlr");
	  }
	);
});