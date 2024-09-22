// Слайдер для фото (блок3)
new Swiper(".block2__swiper .swiper", {
    navigation: {
        nextEl: ".swiper-photo-button-next",
        prevEl: ".swiper-photo-button-prev"
    },
    pagination: {
        el: '.block2__swiper-pagination',
        clickable: true
    },
    spaceBetween: 30,
    slidesPerView: 1,
    freeMode: {
        enabled: true,
        sticky: true
    },
    keyboard: true,
    speed: 600,
    breakpoints: {
        481: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        601: {
            spaceBetween: 30,
            slidesPerView: 2
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 3
        },
        992: {
            spaceBetween: 40,
            slidesPerView: 3
        },
        1201: {
            spaceBetween: 60,
            slidesPerView: 3
        },
        1441: {
            spaceBetween: 60,
            slidesPerView: 4
        }
    }
});