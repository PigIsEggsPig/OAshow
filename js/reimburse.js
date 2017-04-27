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

//日历插件使用
requirejs(['jquery','my97'],function($,WdatePicker){
	$('.J-date').click(function(){
		WdatePicker({
			el:this,//指定一个控件节点或控件的ID,必须具有value或innerHTML属性
			skin:"twoer",//皮肤
			dateFmt:'yyyy-MM-dd'//日期显示格式
			//minDate:'1900-01-01 00:00:00',//最小日期
			//maxDate:'2099-12-31 23:59:59',//最大日期
		})
	});
});

//表格颜色变化及删除按钮
requirejs(['jquery'],function($){
	function tableColor(){
		var trNode=$('.reim-table').find("tr");
		trNode.removeClass("tr-color");
		for(var i=0;i<trNode.length;i++){
			if(i%2==0){
				trNode.eq(i).addClass("tr-color");
			}
		}
	}
	tableColor();
	$('.reim-gray').click(function(){
		if($(this).html()=="删除"){
			$(this).parent().parent().remove();
			tableColor();
		}
	});
});

//下拉菜单选项
requirejs(["jquery"],function($){
	$('body').click(function(){
		$(".reim-style-list").hide()
	});
	$('.reim-style').click(function(e){
		cancelBubble(e);
		$(this).siblings().show();
	});
	$('.reim-style-list').children('li').click(function(){
		var sibNode=$(this).parent().siblings();
		sibNode.children("input").val($(this).val());
		sibNode.children("span").text($(this).children("a").text());
		$(this).parent().hide();
	});
	function cancelBubble(e){
		var event = e || window.event;
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	}
});