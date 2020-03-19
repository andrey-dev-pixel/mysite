$(function(){
	$(window).scroll(function() {
        if ($(this).scrollTop() > 700){  
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
            
        }
    });
    // плавное перемещение страницы к нужному блоку
    $(".nav-item a").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
    // Menu opener hamburger
	$('.nav-link').click(function () {
        $('.nav-menu').toggleClass('nav-collapsed').css("width", "150px");
        $('.nav-menu').slideToggle(0, function(){
           
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });
    });
    //$('.nav-item').click(function () {
    //    $('.nav-menu').removeClass('nav-collapsed').css("display", "none");
    //    $('.nav-link').css("display", "block");
    //    $('.nav-menu').css("width", "80px"); // плавно скрываем, или отображаем все элементы <div>
    //});
    //$(window).resize(function () {
    //   if($(window).width() >= 768){
    //        $('.nav-link').css("display", "none");
    //});
    //});
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