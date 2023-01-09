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
});

const swiperSecond = new Swiper('.second-slider__slides', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    // Navigation arrows
    navigation: {
        nextEl: '.second-slider__button-next',
        prevEl: '.second-slider__button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const brandSwiper = new Swiper('.brand-slider__swiper', {
    slidesPerView: 8,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: '.brand-slider__btn-prev',
        prevEl: '.brand-slider__btn-next',

    }
});