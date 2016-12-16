$(function(){
	//榜单切换
	$(".top1-title li").mouseover(function(){
		$(".top1-title li").removeClass("sidebar_ul_li");
		$(this).addClass("sidebar_ul_li");
		var id = $(this).index();
		$(".top1 div[id^=text]").css("display","none");
		$(".top1 div[id=text"+id+"]").css("display","block");
	});
});