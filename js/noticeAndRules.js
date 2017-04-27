requirejs.config({
	baseUrl:"./js",//配置基础路径
	//urlArgs:"v=1.2.0",//对所有的js文件加版本信息
	paths:{
		jquery:"lib/jquery.min",//起别名
		my97:"My97DatePicker/WdatePicker"
	},
    shim:{ //如果js文件不支持AMD;//exports//输出
        'my97': {
             exports: 'WdatePicker'
         }
    }
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

//显示全部和收起
requirejs(["jquery"],function($){
	$(".showText").click(function(){
		$(this).hide();
		$(this).siblings('a').show();
		$(this).parent().css({"white-space":"normal","height":"auto","width":"1072px"});
	});
	$(".hideText").click(function(){
		$(this).hide();
		$(this).siblings('a').show();
		$(this).parent().attr({"style":""})
	});
});