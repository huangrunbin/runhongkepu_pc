 $(document).ready(function(){
 	
 	$('.header_nav').find('ul > li').on('click',function(){
 		var biaoti = $(this).html();
 		
 		if(biaoti == '首页'){
 			$(location).attr('href', 'index.html');
 		}else if(biaoti == '项目服务'){
 			$(location).attr('href', 'xiangmu.html');
 		}else if(biaoti == '走进润荭科普'){
 			$(location).attr('href', 'runhongkepu.html');
 		}else if(biaoti == '服务理念'){
 			$(location).attr('href', 'fuwu.html');
 		}else if(biaoti == '关于我们'){
 			$(location).attr('href', 'guanyu.html');
 		}else if(biaoti == '联系我们'){
 			$(location).attr('href', 'lianxi.html');
 		}
 	});
 	
 	//走进润荭科普页面切换
 	$('.gonsi_jiagou').find('li').click(function(){
 		$('.gonsi_jiagou').find('li').css('color','#000');
 		$(this).css('color','#F34331');
 		var zhi = $(this).text();
 		if(zhi == '公司介绍'){
 			$('.jiesao').css('display','block');
 			$('.jiagou').css('display','none');
 		}else if(zhi == '公司架构'){
 			$('.jiesao').css('display','none');
 			$('.jiagou').css('display','block');
 		}
 	});
 	
 });