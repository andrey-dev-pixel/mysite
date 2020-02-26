//Preloader
window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 500);
    }
$(function () {

$(window).scroll(function() {
        if ($(this).scrollTop() > 1080){  
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
            
        }
    });

$(window).scroll(function() {
        if ($(this).scrollTop() > 1080){  
            $('.icon-bar').addClass("color");
        }
        else{
            $('.icon-bar').removeClass("color");
            
        }
    });
// Menu opener hamburger
$('.nav-link-btn').click(function () {
        $('.nav-list').removeClass('nav--collapsed');
    });
});