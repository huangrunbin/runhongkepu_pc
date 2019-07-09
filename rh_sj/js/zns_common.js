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
		}if(zhi == '联系我们'){
			$(location).attr('href', 'lianxi.html');
		}
	});

});