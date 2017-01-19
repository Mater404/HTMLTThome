$(function(){

//之家
    var t;
	$(".an").hover(
	  function () {
		t = setTimeout(function () {
		$(".nav-item-1").addClass("nil-bg");
		$(".nl").slideDown(100); 
		}, 50); 
	 },
	  function () {
	  	clearTimeout(t); 
	  	t = setTimeout(function () { 
			$(".nav-item-1").removeClass("nil-bg");
			$(".nl").slideUp(100);
	  	}, 50);
	});

//it圈
	$(".quan").hover(
	  function () {
		t = setTimeout(function () {
		$(".nav-item-5").addClass("nil-bg");
		$(".nlquan").slideDown(100); 
		}, 50); 
	 },
	  function () {
	  	clearTimeout(t); 
	  	t = setTimeout(function () { 
			$(".nav-item-5").removeClass("nil-bg");
			$(".nlquan").slideUp(100);
	  	}, 50);
	});
//辣品
		$(".nav-item-7").hover(
	 	 function () {
		$(".nav-item-7").addClass("nil-bg");
		},
	 	 function () {
			$(".nav-item-7").removeClass("nil-bg");
		});
//订阅
	$(".dy1").hover(
	  function () {
		t = setTimeout(function () {
		$(".item-link-2").addClass("nil-bg");
		$(".dy").slideDown(100); 
		}, 50); 
	 },
	  function () {
	  	clearTimeout(t); 
	  	t = setTimeout(function () { 
			$(".item-link-2").removeClass("nil-bg");
			$(".dy").slideUp(100);
	  	}, 50);
	});
//软媒应用
	$(".dy2").hover(
	  function () {
		t = setTimeout(function () {
		$(".rm").slideDown(100); 
		}, 50); 
	 },
	  function () {
	  	clearTimeout(t); 
	  	t = setTimeout(function () { 
			$(".rm").slideUp(100);
	  	}, 50);
	});
	//最新排行
	$("#ct-tab1").click(function(){
		$(".lst-1").css("display","block");
		$(".lst-2").css("display","none");
		$("#ct-tab1").addClass("current");
		$("#ct-tab2").removeClass("current");
	});
	//热门排行
	$("#ct-tab2").click(function(){
		$(".lst-1").css("display","none");
		$(".lst-2").css("display","block");
		$("#ct-tab1").removeClass("current");
		$("#ct-tab2").addClass("current");
	});
	
});
