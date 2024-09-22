// Слайдер для новостей (блок1)
new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-next-news",
        prevEl: ".swiper-prev-news"
    },
    pagination: {
        el: '.swiper-news-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    spaceBetween: 40,
    slidesPerView: 1,
    freeMode: {
        enabled: true,
        sticky: true
    },
    keyboard: true,
    speed: 600,
    breakpoints: {
        481: {spaceBetween: 50},
        768: {spaceBetween: 60}
    }
});