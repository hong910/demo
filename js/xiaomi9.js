$(document).ready(function(){
	(function($) {
        'use strict';
        window.scrollReveal = new scrollReveal({ reset: true, move: '50px' });
    })();
	$(".tab-box").children("li").on('click',function(){
		$(this).addClass("active-tab").siblings().removeClass("active-tab");
		$(".page1").eq($(this).index()).addClass("active-img").siblings().removeClass("active-img");
//		.setTimeout("active-img",3000);
	})
	$(document).scroll(function(){
		console.log($(document).scrollTop());
		if($(document).scrollTop()>=240){
			$(".xiaomi9-top").css("top","0");
		}else{
			$(".xiaomi9-top").css("top","-63px");
		}
	})
	$(".void-left").on('click',function(){
		$(".shiping").css("display","none");
		$(".shipings").css("display","block");
	})
	$(".void-right").on('click',function(){
		$(".shipings").css("display","none");
		$(".shiping").css("display","block");
	})
	$(".tabs-box").children("li").on('click',function(){
		$(this).addClass("tabs-active").siblings().removeClass("tabs-active");
		console.log($(this).index());
		switch($(this).index()){
			case 0:
				$(".img-tabs").animate({
					"margin-left":"-379px"
				})
				break;
			case 1:
				$(".img-tabs").animate({
					"margin-left":"-1235px"
				})
				break;
			case 2:
				$(".img-tabs").animate({
					"margin-left":"-2055px"
				})
				break;
		}
	})
	
	
	$(".ta-boxn").children("li").on('click',function(){
		$(this).addClass("active-tabn").siblings().removeClass("active-tabn");
		console.log($(this).index());
		switch($(this).index()){
			case 0:
				$(".mar-img").animate({
					"margin-left":"0px"
				})
				break;
			case 1:
				$(".mar-img").animate({
					"margin-left":"-752px"
				})
				break;
			case 2:
				$(".mar-img").animate({
					"margin-left":"-1504px"
				})
				break;
		}
	})
	var num=0;
	function tabimg () {
		switch(num){
			case 0:
				$(".mar-img").animate({
					"margin-left":"0px"
				})
				$(".ta-boxn").children("li").eq(num).addClass("active-tabn").siblings().removeClass("active-tabn");
				num++;
				break;
			case 1:
				$(".mar-img").animate({
					"margin-left":"-752px"
				})
				$(".ta-boxn").children("li").eq(num).addClass("active-tabn").siblings().removeClass("active-tabn");
				num++;
				break;
			case 2:
				$(".mar-img").animate({
					"margin-left":"-1504px"
				})
				$(".ta-boxn").children("li").eq(num).addClass("active-tabn").siblings().removeClass("active-tabn");
				num=0;
				break;
		}
	}
	setInterval(function(){tabimg()},3000);
	
})