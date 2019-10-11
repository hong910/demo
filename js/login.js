$(document).ready(function(){
	//切换登录
	$('.tab-item:eq(0)').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".con-box-box").css("display","none");
		$(".con-box-con").css("display","block");
	})
	$('.tab-item:eq(1)').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".con-box-con").css("display","none");
		$(".con-box-box").css("display","block");
	})
	//密码是否显示
	var i=0;
	$(".showpassword").on('click',function(){
		for(;i<2;){
			if(i==0){
				$(".password").attr("type","text");
				i++;
				break;
			};
			if(i==1){
				$(".password").attr("type","password");
				i=0;
				break;
			}
		}
	})
	//点击登录
	$(".button-primary-btn").on('click',function(){
		var is = checkPhone($(".phone").val());
		var iss = checkPassWord($(".password").val())
		if(is&&iss){
			//正确
			CommentAll($(".phone").val(),$(".password").val());
		}
	})
	//判断手机号
	function checkPhone(phone) {
		if(!(/^1[34578]\d{9}$/.test(phone))) {
			$(".input-phone").append("<p class='error-p'>手机号格式错误！</p>");
		} else {
			return true;
		}
	}
	//判断密码
	function checkPassWord(password){
		if(password==""||password==null){
			$(".input-password").append("<p class='error-p'>请输入密码！</p>");
		}else{
			return true;
		}
	}
	//重置
	$(".phone").on('click',function(){
		$("p").remove(".error-p");
	})
	$(".password").on('click',function(){
		$("p").remove(".error-p");
	})
	
	
	//服务器请求
	//第一步，创建XMLHttpRequest对象
	var xmlHttp = new XMLHttpRequest();
	function CommentAll(phone,passwd){
	    //第二步，注册回调函数
		xmlHttp.onreadystatechange = callback1;
	    //第三步，配置请求信息，open(),get
	    xmlHttp.open("get", "https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone="+phone+"&passwd="+passwd, true);
	    //第四步，发送请求,get请求下，要传递的参数放这
	    xmlHttp.send();
	}
	//第五步，创建回调函数
	function callback1() {
		if (xmlHttp.readyState == 4){
	    	if (xmlHttp.status == 200) {
	        	var text = xmlHttp.responseText;
	        	var resultJson = eval("("+text+")");//把响应内容对象转成javascript对象
	            var msg = resultJson.msg;//获取json中的msg键对应的值
	            if(msg=="成功!"){
	            	$(window).attr('location',"shouye.html");
	            	window.sessionStorage.setItem("admin",msg);
	            	
	            }else if(msg=="用户不存在！"){
	            	$(".login-btn").prepend("<p class='error-p'>用户不存在！</p>")
	            }else{
	            	$(".login-btn").prepend("<p class='error-p'>账号或密码错误！</p>")
	            }
	        }
	    }
	}
	
})