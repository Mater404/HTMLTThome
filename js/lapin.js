$(function(){
	var htmls="<li>"
		+"<a href='#'>"
			+"<img src='img/20161203_154816_7981.jpg' />"
		+"</a>"
		+"<div class='listright'>"
		+"<div class='toprows'>"
		+"<div class='pro-title'>"
		+"<a href='laping-item.html'>韩范小清新，SK Girl秋冬加绒加厚女士外套49元</a>"
		+"<span>20元券</span>"
		+"</div>"
		+"<p>"
		+"立体裁剪，舒适亲肤，不起球，不褪色，优质面料，健康舒适。"
		+"<a href='laping-item.html'>详情介绍</a>"
		+"</p>"
		+"</div>"
		+"<div class='tags'>"
		+"<span>"
		+"<a href='#'>衣服</a>"
		+"</span>"
		+"<div class='tags-rt'>"
		+"<a class='malllink'>"
		+"天猫"
		+"<span>&nbsp; 11:42</span>"
		+"</a>"
		+"<a class='pro-buy lingquan' href='#'>前往领取</a>"
		+"<a class='pro-buy' href='#'>领卷</a>"
		+"</div>"
		+"</div>"
		+"</div>"
		+"</li>"
		+"<li>"
		+"<a href='#'>"
			+"<img src='img/20161203_154816_7981.jpg' />"
		+"</a>"
		+"<div class='listright'>"
		+"<div class='toprows'>"
		+"<div class='pro-title'>"
		+"<a href='laping-item.html'>韩范小清新，SK Girl秋冬加绒加厚女士外套49元</a>"
		+"<span>20元券</span>"
		+"</div>"
		+"<p>"
		+"立体裁剪，舒适亲肤，不起球，不褪色，优质面料，健康舒适。"
		+"<a href='laping-item.html'>详情介绍</a>"
		+"</p>"
		+"</div>"
		+"<div class='tags'>"
		+"<span>"
		+"<a href='#'>衣服</a>"
		+"</span>"
		+"<div class='tags-rt'>"
		+"<a class='malllink'>"
		+"天猫"
		+"<span>&nbsp; 11:42</span>"
		+"</a>"
		+"<a class='pro-buy lingquan' href='#'>前往领取</a>"
		+"<a class='pro-buy' href='#'>领卷</a>"
		+"</div>"
		+"</div>"
		+"</div>"
		+"</li>"
		+"<li>"
		+"<a href='#'>"
			+"<img src='img/20161203_154816_7981.jpg' />"
		+"</a>"
		+"<div class='listright'>"
		+"<div class='toprows'>"
		+"<div class='pro-title'>"
		+"<a href='laping-item.html'>韩范小清新，SK Girl秋冬加绒加厚女士外套49元</a>"
		+"<span>20元券</span>"
		+"</div>"
		+"<p>"
		+"立体裁剪，舒适亲肤，不起球，不褪色，优质面料，健康舒适。"
		+"<a href='laping-item.html'>详情介绍</a>"
		+"</p>"
		+"</div>"
		+"<div class='tags'>"
		+"<span>"
		+"<a href='#'>衣服</a>"
		+"</span>"
		+"<div class='tags-rt'>"
		+"<a class='malllink'>"
		+"天猫"
		+"<span>&nbsp; 11:42</span>"
		+"</a>"
		+"<a class='pro-buy lingquan' href='#'>前往领取</a>"
		+"<a class='pro-buy' href='#'>领卷</a>"
		+"</div>"
		+"</div>"
		+"</div>"
		+"</li>"
		+"<li>"
		+"<a href='#'>"
			+"<img src='img/20161203_154816_7981.jpg' />"
		+"</a>"
		+"<div class='listright'>"
		+"<div class='toprows'>"
		+"<div class='pro-title'>"
		+"<a href='laping-item.html'>韩范小清新，SK Girl秋冬加绒加厚女士外套49元</a>"
		+"<span>20元券</span>"
		+"</div>"
		+"<p>"
		+"立体裁剪，舒适亲肤，不起球，不褪色，优质面料，健康舒适。"
		+"<a href='laping-item.html'>详情介绍</a>"
		+"</p>"
		+"</div>"
		+"<div class='tags'>"
		+"<span>"
		+"<a href='#'>衣服</a>"
		+"</span>"
		+"<div class='tags-rt'>"
		+"<a class='malllink'>"
		+"天猫"
		+"<span>&nbsp; 11:42</span>"
		+"</a>"
		+"<a class='pro-buy lingquan' href='#'>前往领取</a>"
		+"<a class='pro-buy' href='#'>领卷</a>"
		+"</div>"
		+"</div>"
		+"</div>"
		+"</li>"
		+"<li>"
		+"<a href='#'>"
			+"<img src='img/20161203_154816_7981.jpg' />"
		+"</a>"
		+"<div class='listright'>"
		+"<div class='toprows'>"
		+"<div class='pro-title'>"
		+"<a href='laping-item.html'>韩范小清新，SK Girl秋冬加绒加厚女士外套49元</a>"
		+"<span>20元券</span>"
		+"</div>"
		+"<p>"
		+"立体裁剪，舒适亲肤，不起球，不褪色，优质面料，健康舒适。"
		+"<a href='laping-item.html'>详情介绍</a>"
		+"</p>"
		+"</div>"
		+"<div class='tags'>"
		+"<span>"
		+"<a href='#'>衣服</a>"
		+"</span>"
		+"<div class='tags-rt'>"
		+"<a class='malllink'>"
		+"天猫"
		+"<span>&nbsp; 11:42</span>"
		+"</a>"
		+"<a class='pro-buy lingquan' href='#'>前往领取</a>"
		+"<a class='pro-buy' href='#'>领卷</a>"
		+"</div>"
		+"</div>"
		+"</div>"
		+"</li>";
	var index= true;
	$(window).scroll(function(){
		var scrtop = $(this).scrollTop()+800;
		var winhe = $(document).height();
		var cont = winhe-scrtop;
		$(".sefc1").val(scrtop);
		$(".sefc2").val(winhe);
		$(".sefc3").val(index);
//		if(scrtop>winhe)
//		if(index){
//			$(".contentlist").append(htmls);
//			index=false;
//		}
		$(".sefc4").val(cont);
		//侧边栏浮动
		if(scrtop>1442&&cont>=470){
			$(".right_bar").css("top",scrtop-1450);
		}
		if(cont<=547){		//防止遮挡友链
			$(".right_bar").addClass("right_bar_bomm");
		}else{
			$(".right_bar").removeClass("right_bar_bomm");
		}
		if(scrtop==800){	//防止顶部偏移
			$(".right_bar").removeAttr("style");
		}
	});
})
