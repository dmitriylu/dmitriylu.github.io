$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('nav').toggleClass('active');
    });
// ----popup
    $('.open-popup').click(function(){
        $('.popup').addClass('active');
        $('.bg-popup').fadeIn();

        $('.bg-popup, .close').click(function(){
            $('.popup').removeClass('active');
            $('.bg-popup').fadeOut();
        });
        return false
    });
});