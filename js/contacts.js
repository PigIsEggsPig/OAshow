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

//表格颜色变化及删除按钮
requirejs(['jquery'],function($){
	function tableColor(){
		var trNode=$('.contacts-table').find("tr");
		for(var i=1;i<trNode.length;i++){
			if(i%2==0){
				trNode.eq(i).addClass("tr-color");
			}
		}
	}
	tableColor();
});

//部门选择下拉菜单
requirejs(['jquery'],function($){
	$('.contacts-depart').mouseenter(function(){
		var ulNode=$(this).children('.contacts-style-list');
		var height = ulNode.children("li").length * 40;
		$(this).css({"overflow":"visible"});
		ulNode.stop().animate({"height": height+"px"},300);
	});
	$('.contacts-depart').mouseleave(fun);
	$('.contacts-style-list').children('li').click(function(){
		$('.contacts-style').children('input').val($(this).val());
		$('.contacts-style').children('span').text($(this).text());
		fun();
	});
	function fun(){
		var ulNode=$('.contacts-depart').children('.contacts-style-list');
		ulNode.stop().animate({"height": "0px"},300,function(){
			$('.contacts-depart').css({"overflow":"hidden"})
		});
	}
});

//焦点事件
requirejs(['jquery'],function($){
	$('#contacts-s-input').focus(function(){
		if($(this).val()=="请输入姓名/手机/职位"){
			$(this).val("");
		}
	});
	$('#contacts-s-input').blur(function(){
		if($(this).val()==""){
			$(this).val("请输入姓名/手机/职位");
		}
	});
	$(".contacts-x").click(function(){
		$('#contacts-s-input').val("请输入姓名/手机/职位");
	});
});
