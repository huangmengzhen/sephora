//1.导入模块的公用部分
!function($){
	$('.topcontent').load('header.html');
	//第一个参数：地址。
	//第二个参数：选择器。
	$('.footercontent').load('footer.html');
}(jQuery);

!function($){
	var $louti=$('#fixedL');//左侧楼梯
	var $loutili=$('#fixedL .fixedL-content-list');
	var $louceng=$('#louceng>div');
	$(window).on('scroll',function(){
		var $scrolltop=$(window).scrollTop();//获取滚动条的top值。
		if($scrolltop>=1000){
			$louti.show();
		}else{
			$louti.hide();
		}
		
		//4.4:拖动滚轮，对应的楼梯添加对应的类名
		$louceng.each(function(index,element){//index:0-8
			//通过遍历的方式获取每一个楼层的top值
			var $top=$louceng.eq(index).offset().top+$(this).innerHeight()/2;
			if($top>$scrolltop){
				$loutili.removeClass('active');//清除所有的类
				$loutili.eq($(this).index()).addClass('active');
				return false;//阻止循环
				//每次只能有一个满足条件添加类，其他的通过循环阻止
			}
		});
	});
	//4.2点击左侧楼梯，右边对应的楼层跳转。
	$loutili.on('click',function(){
		$(this).addClass('active').siblings('div').removeClass('active');
		var $top=$louceng.eq($(this).index()).offset().top;
		$('html,body').animate({//赋值时考虑兼容。
			scrollTop: $top
		});
	});
	
	//4.3点击top回到顶部
// 	$('.last').on('click',function(){
// 		$('html,body').animate({//赋值时考虑兼容。
// 			scrollTop: 0
// 		});
// 	});
	
}(jQuery)