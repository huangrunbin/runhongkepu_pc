$(document).ready(function() {

	//导航点击事件
	var dj = 0;
	var clienth_a = document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
	$('.zhezhao').css('height', clienth_a + 'px');
	var daohang = $('.home-logo').height();
	var dibu = $('.footer').height();
	var zhi = (clienth_a - daohang) - dibu;
	$('.nav').css('height', zhi + 'px');
	$('.header').click(function() {
		if(dj == 0) {
			$('.nav').show();
			$('.zhezhao').show();
			$('.nav').css('left', '-210px');
			$('.nav').animate({
				left: '0px'
			});
			dj = 1;
		} else {
			$('.nav').animate({
				left: '-210px'
			});
			setTimeout(function() {
				$('.nav').hide();
			}, 500);
			dj = 0;
			$('.zhezhao').hide();
		}
	});

	//点击遮罩隐藏导航
	$('.zhezhao').click(function() {
		$('.nav').animate({
			left: '-210px'
		});
		setTimeout(function() {
			$('.nav').hide();
		}, 500);
		dj = 0;
		$(this).hide();
	});

	//点击导航跳转
	$('.nav').find('li').click(function() {
		var zhi = $(this).html();
		if(zhi == '润荭科普首页') {
			$(location).attr('href', 'index.html');
		}if(zhi == '项目服务'){
			$(location).attr('href', 'xiangmu.html');
		}if(zhi == '走进润荭科普'){
			$(location).attr('href', 'runhongkepu.html');
		}if(zhi == '服务理念'){
			$(location).attr('href', 'fuwu.html');
		}if(zhi == '关于我们'){
			$(location).attr('href', 'guanyu.html');
		}if(zhi == '联系我们'){
			$(location).attr('href', 'lianxi.html');
		}
	});
	
	//首页点击事件
	$('.login').click(function(){
		$(location).attr('href', 'index.html');
	});
	
	$('.lianxi_on').click(function(){
		$(location).attr('href', 'lianxi.html');
	});
	
	//走进润荭科普页面导航切换
	$('.zou_jin').find('li').click(function(){
		qie = $(this).html();
		$('.zou_jin').find('li').css('background','#fff').css('color','#000');
		$(this).css('background','#F34331').css('color','#fff');
		var zhi = $(this).html();
		if(zhi == '公司介绍'){
			$('.jiesao').show();
			$('.jiagou').hide();
		}else{
			$('.jiagou').show();
			$('.jiesao').hide();
		}
	});
	
	//服务项目页面li标签排版
 	var zhi = 0;
 	$('.xiangmu_ul').find('li').each(function(){
        zhi ++;
        if(zhi%3 == 0){
        	   $(this).css('float','right').css('margin-right','0');
        }
    });

});