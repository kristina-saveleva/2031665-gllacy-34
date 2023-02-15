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
    $('.ice-cream__image-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.ice-cream__image'
    });
    $('.ice-cream__image').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.ice-cream__image-main',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
})
