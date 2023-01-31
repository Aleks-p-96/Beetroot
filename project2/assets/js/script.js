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
        slidesPerView: 1,
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
        breakpoints: {
            768: {
                slidesPerView:2,
            },
            1280: {
                slidesPerView:3,
            },
        }
    })
    let map;
    initMap();
    
    let burger = document.getElementById('burger');
    if (burger) {
        burger.addEventListener('click', menuHandler);
    }

    let navLinks = document.querySelectorAll('.nav__link');
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', clickOnLink)
        });
    }

    let galleryImages = document.querySelectorAll('.gallery__gallery-item');
    galleryImages.forEach(images => {
        images.addEventListener('click', imageZoom)
    })

    let arrow = document.querySelector('.header__arrow');
    arrow.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: document.getElementById('aboutUs').getBoundingClientRect().top + scrollY,
            behavior: 'smooth',
        })
    })

    

})

function imageZoom(e) {
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle('active');
    document.body.classList.toggle('locked')
}

function clickOnLink(e) {
    e.preventDefault();
    let link = e.target;
    if (link.dataset.scroll && document.getElementById(link.dataset.scroll)) {
        let blockToScroll = document.getElementById(link.dataset.scroll);
        let scrollCoord = blockToScroll.getBoundingClientRect().top + scrollY;
        closeForScroll();
        window.scrollTo({
            top: scrollCoord,
            behavior: "smooth",
        });
    }
}

function menuHandler(e) {
    let body = document.body,
        menu = document.getElementById('nav'),
        burger = document.getElementById('burger');
    if (menu) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('locked');
    }
}
function closeForScroll(e) {
    let body = document.body,
        menu = document.getElementById('nav'),
        burger = document.getElementById('burger');
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        body.classList.remove('locked');
        menu.classList.remove('active');
    }
}


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

// lorem