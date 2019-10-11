$(document).ready(function(){
	
	$(".jiadian-tab").hover(function(){
		$(this).addClass("activejd").siblings().removeClass("activejd");
		var i=$(this).index();
		console.log(i);
		console.log($(".jiadian-con:eq(i)").innerText);
		$(".jiadian-con").eq(i).addClass("active").siblings().removeClass("active");
	})
	
	
	
	
	//幻灯片
	var num = 0; //循环变量,定义图片页数
	var delay = 2000; //播放时间间隔
	var length = 5; //图片张数
	function playImage(n){ 
		$('.play .imgList li').removeClass('current').siblings().eq(n).addClass('current'); 
		$('.play-list span').removeClass('current').siblings().eq(n).addClass('current'); 
	}
	function scrollPicsPlay(){
		num++; if (num>=length){
			num=0; 
		} 
		playImage(num);
	}
	//3..设置图片播放时间间隔
	var timeSpan = setInterval(scrollPicsPlay, delay);
	//          4.1.鼠标悬浮 不轮播 
	$('.play').on('mouseenter', function() {
		clearInterval(timeSpan);
	}).on('mouseleave', function() {
		timeSpan = setInterval(scrollPicsPlay, delay)
	});
	//            4.2给圆点按钮绑定事件
	$('.play-list span').on('click', function() {
		num = $(this).index();
		playImage(num);
	});
	//            4.3.右边图片绑定事件 
	$('.slide-right').on('click', function() {
		num++;
		if(num >= length) {
			num = 0;
		}
		playImage(num)
	});
	//            4.4.左边图片绑定事件 
	$('.slide-left').on('click', function() {
		num--;
		if(num < 0) {
			num = length - 1
		}
		playImage(num)
	});
})




