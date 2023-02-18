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
    $('.ice-cream__main-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.ice-cream__main-image'
    });
    $('.ice-cream__main-image').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.ice-cream__main-image',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
})
