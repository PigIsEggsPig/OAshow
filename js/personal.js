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

//部门选择下拉菜单
requirejs(['jquery'],function($){
	$('.personal-sel').mouseenter(function(){
		$(this).children('.personal-style-list').show();
	});
	$('.personal-sel').mouseleave(function(){
		$(this).children('.personal-style-list').hide();
	});
	$('.personal-style-list').children('li').click(function(){
		$(this).parent().hide();
		$(this).parent().siblings('.personal-style').children('input').val($(this).val());
		$(this).parent().siblings('.personal-style').children('span').text($(this).text());
	});
});
