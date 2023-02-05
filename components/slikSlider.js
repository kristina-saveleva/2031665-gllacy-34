$(function () {
    $('.slider__ice').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        arrows: false
    });
});

$(function () {
    $('.ice-cream__image').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });
});
