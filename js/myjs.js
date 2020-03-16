$(function(){
	var transTime = 5000;
	var numBgColors = $('.bg-grad').length;
	var bgtrans = setInterval(function(){
	if($('.bg-grad.active').index() == ($('.bg-grad').length-1)){
	$('.bg-grad.active').removeClass('active');
	$('.bg-grad').eq(0).addClass('active');
	}else{
	var curIndex = $('.bg-grad.active').index();
	$('.bg-grad.active').removeClass('active');
	$('.bg-grad').eq(curIndex+1).addClass('active');
	}
	},transTime);

	$(window).scroll(function() {
        if ($(this).scrollTop() > 700){  
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
            
        }
    });
    // плавное перемещение страницы к нужному блоку
    $(".nav_item a").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
    // Menu opener hamburger
	$('.nav-link').click(function () {											//ловим клик.
        $('.menu-collapse').toggleClass('d-none').css('order', '1');			//отключаем d-none для меню.
        $('.nav_menu, .nav').addClass('nav-collapsed');
        $('.nav_item').addClass('nav-menu-collapsed');							//подлючаем стили выпадающего окна.
        $('.nav-link').addClass('d-none');										//гамбургеру присваиваем свойство d-none.								
    });
    $('.nav_item').click(function () {
        $('.menu-collapse').addClass('d-none');
        $('.nav_menu').removeClass('nav-collapsed');
        $('.nav-link').removeClass('d-none');
        $('.nav').removeClass('nav-collapsed');
        $('.nav_item').removeClass('nav-menu-collapsed');
    });
    // Scroll to top button appear
    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
    });
    $(".scroll-to-top a").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
});