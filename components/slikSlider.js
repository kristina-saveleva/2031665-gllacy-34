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

export function sliderForProduct () {
    $('.ice-cream__main-image-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.ice-cream__image'
    });
    $('.ice-cream__image').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.ice-cream__main-image-wrapper',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
};
