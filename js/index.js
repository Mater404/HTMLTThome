$(function(){
	//图片的鼠标悬停
//	$("#scroll_img li").hover(function(){
//		flag = true;
//	},function(){
//		flag =false;
//	});
	//新闻标题凸显
	$(".lst .block ul li").hover(function(){
		$(this).addClass("mnow");
		$(this).find(".date").hide();
	},function(){
		$(this).removeClass("mnow");
		$(this).find(".date").show();
	});
	//页码切换
	var NLNUM = $('.page_num a');
    NLNUM.click(function () {
        NLNUM.removeClass('current');
        $(this).addClass('current');
        var NUMB = $(this).index() + 1;
        //alert(String(NUMB));
        if ($(this).attr('class') == 'current') {
            $('.new-list .block').css({ 'display': 'none' });
            $('.new-list-' + String(NUMB)).css({ 'display': 'block' });
        } else {
            $('.new-list .block').css({ 'display': 'none' });
        }
    });
	
//	$("#lead").carousel({
//			interval:2000,
//	});
});
