$(document).ready(function(){
	$(".button").on('click',function(){
		CommentAll($(".phone").val(),$(".passwd").val());
	})
	//服务器请求
	//第一步，创建XMLHttpRequest对象
	var xmlHttp = new XMLHttpRequest();
	function CommentAll(phone,passwd){
	    //第二步，注册回调函数
		xmlHttp.onreadystatechange = callback1;
	    //第三步，配置请求信息，open(),get
	    xmlHttp.open("get", "https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone="+phone+"&passwd="+passwd, true);
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
	            	$(window).attr('location',"denglu.html");
	            	
	            }else if(msg=="用户已注册！"){
	            	alert(msg);
	            }
	        }
	    }
	}
})
