$(document).ready(function(){
    


    $('.about-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: ' <svg class="icon-arrow icon-arrow__left"><use xlink:href="./build/img/svg/symbol/sprite.svg#left-arrow"></use></svg>',
        prevArrow: ' <svg class="icon-arrow icon-arrow__right"><use xlink:href="./build/img/svg/symbol/sprite.svg#right-arrow"></use></svg>',
        responsive: [
            {
                breakpoint: 621,
                    settings: {
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
            }
        ]
    });


    $('.slider-quotes').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        asNavFor: '.slider-trainer',
    });
    $('.slider-trainer').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // focusOnSelect: true,
        asNavFor: '.slider-quotes',
        nextArrow: ' <svg class="icon-arrow icon-arrow__right"><use xlink:href="./build/img/svg/symbol/sprite.svg#right-arrow"></use></svg>',
        prevArrow: ' <svg class="icon-arrow icon-arrow__left"><use xlink:href="./build/img/svg/symbol/sprite.svg#left-arrow"></use></svg>',
    });
  });