
$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('nav').toggleClass('active');
    });
});