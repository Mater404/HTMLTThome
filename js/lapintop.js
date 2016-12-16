$(function(){
	//二维码
    $(".to3").hover(function () {
        $(".ewm").stop().fadeIn(500, function () {
        });
    },
    function () {
        $(".ewm").stop().fadeOut(300, function () {
        });
    });
    var top_hegit = $(".topf").height()+30;
	//顶部浮动
	$(window).scroll(function() {

		if($(window).scrollTop()>top_hegit){
			$(".fixwrapper").addClass("fixtop");
			$(".center").addClass("centop");
		}else{
			$(".fixwrapper").removeClass("fixtop");
			$(".center").removeClass("centop");
		}
	});
})
