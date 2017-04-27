requirejs.config({
	baseUrl:"./js",//配置基础路径
	//urlArgs:"v=1.2.0",//对所有的js文件加版本信息
	paths:{
		jquery:"lib/jquery.min"//起别名
	}/*,
    shim:{ //如果js文件不支持AMD
        'iscrollProbe': {
             exports: 'iscrollProbe'
         }
    }*/
});

//导航
requirejs(["jquery"],function($){
	var lisNode=$('.nav-main li');
	var navLine=$('.nav-line');
	var navNode=$('.nav-main');
	var currentNode=$('.nav-main .current')
	lisNode.mouseenter(function(){
		var liX=$(this).position().left;
		navLine.stop().animate({left:liX+"px"},200);
	});
	navNode.mouseleave(function(){
		var liX=currentNode.position().left;
		navLine.stop().animate({left:liX+"px"},200);
	});
});

//大背景变换
requirejs(["jquery"],function($){
	var bgBtn=$('.bg-btn');
	var flNavNode=$('.flash-nav');
	var clickNode=$('.flash-nav-main li');
	var imgNode=$('.flash-img li');
	var bigX=$('.bigX');
	bgBtn.click(function(){
		flNavNode.show();
	});
	bigX.click(function(e){
		cancelBubble(e);
		flNavNode.hide();
	});
	clickNode.click(function(e){
		cancelBubble(e);
		var clickPos=$(this).index();
		var imgCurPos=$('.flash-img .flash-cur').index();
		if(imgCurPos==clickPos){
			return;
		}
		imgNode.eq(clickPos).addClass('flash-cur').fadeIn("200");
		imgNode.eq(clickPos).siblings().removeClass('flash-cur').fadeOut("200");
	});
	$('.flash-left').click(function(){
		var imgCurPos=$('.flash-img .flash-cur').index();
		var newPos=imgCurPos==0?9:imgCurPos-1;
		imgNode.eq(newPos).addClass('flash-cur').fadeIn("200");
		imgNode.eq(newPos).siblings().removeClass('flash-cur').fadeOut("200");
	});
	$('.flash-right').click(function(){
		var imgCurPos=$('.flash-img .flash-cur').index();
		var newPos=imgCurPos==9?0:imgCurPos+1;
		imgNode.eq(newPos).addClass('flash-cur').fadeIn("200");
		imgNode.eq(newPos).siblings().removeClass('flash-cur').fadeOut("200");
	});
	//阻止冒泡
	function cancelBubble(e){
		var event = e || window.event;
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	}
});

// 中间的大导航
requirejs(["jquery"],function($){
	aNode=$('.mid-nav-main li');
	aNode.mouseenter(function(){
		var pos=$(this).index()+1;
		$(this).find('dd').css({"color":"#ffffff"});
		$(this).find('.mid-text').css({"margin-top":"-17px"});
		$(this).find('.mid-pic').addClass('mid-pic0'+pos+'-cur');
	});
	aNode.mouseleave(function(){
		var pos=$(this).index()+1;
		$(this).find('dd').css({"color":"#969696"});
		$(this).find('.mid-text').css({"margin-top":"0px"});
		$(this).find('.mid-pic').removeClass('mid-pic0'+pos+'-cur');
	});
});

//下拉
//requirejs(["jquery"],function($){
//	var divSelectNode=$('.J_select');
//	divSelectNode.mouseenter(function(){
//		$(this).children('ul').show();
//	});
//	divSelectNode.mouseleave(function(){
//		$(this).children('ul').hide();
//	});
//});

