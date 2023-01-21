'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const headerSwiper = new Swiper('.header__slider', {
        direction: 'vertical',
        pagination: {
            el: '.header__pagination',
            type: 'bullets',
            clickable: true,
        },
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 3500,
        }
    })
    
    const newsSwiper = new Swiper('.latest__slider', {
        pagination : {
            el: '.latest__slider-pagination',
            type: 'bullets',
            clickable: true,
        },
        slidesPerView: 3,
        loop:  true,
        speed: 1500,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: '.latest__slider-button--next',
            prevEl: '.latest__slider-button--prev'
        },
    })
    
    let map;
    window.initMap = initMap;
    


})




function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: {
        lat: 40.677494,
        lng:  -73.929073
    },
    zoom: 13,
    mapId: '13b310aae9d1a3ff',
    });
}
