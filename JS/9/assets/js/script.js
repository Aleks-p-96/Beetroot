'use strict'

const swiper = new Swiper('.swiper.first-slider', {
    // Optional parameters
    loop: true,
    allowTouchMove: true,
    effect: 'fade',
    grabCursor: 'true',
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 5000,
    },

    speed:600,
});

const swiperSecond = new Swiper('.second-slider__slides', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    speed:500,
    grabCursor: 'true',
    slideToClickedSlide: 'true',

    // Navigation arrows
    navigation: {
        nextEl: '.second-slider__button-next',
        prevEl: '.second-slider__button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 4000,
    },

});

const brandSwiper = new Swiper('.brand-slider__swiper', {
    slidesPerView: 9,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank: true,
    speed:400,
    slideToClickedSlide: 'true',
    grabCursor: 'true',



    navigation: {
        nextEl: '.brand-slider__btn-prev',
        prevEl: '.brand-slider__btn-next',

    },

    autoplay: {
        delay: 3000,
    },
});