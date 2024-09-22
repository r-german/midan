// Форма обратной связи
const fixedBlock = document.querySelector('.fixed-block');
const tableButton = document.querySelector('.table__buttons button');
tableButton.addEventListener("click", function() {
    // при клике на кнопку "Отправить заявку" открываем форму
    fixedBlock.style.cssText = `padding-right: ${scrollbarWidth}px; opacity: 1; visibility: visible;`;
    // содержимое страницы не сдвигается в сторону во время исчезновения/появления полосы прокрутки
    wrapper.style.cssText = `padding-right: ${scrollbarWidth}px;`;
    // блокируем прокрутку страницы
    document.body.classList.add('_lock');
});

document.querySelector('.fixed-block img').addEventListener("click", function() {
    // при клике на крест закрываем форму
    fixedBlock.style.cssText = '';
    wrapper.style.cssText = '';
    // прокрутка страницы доступна
    document.body.classList.remove('_lock');
});

// Слайдер для больших и мини-изображений (блок1)
const smallSwiper = new Swiper(".product__swiper-small .swiper", {
    navigation: {
        nextEl: ".swiper-small-button-next",
        prevEl: ".swiper-small-button-prev"
    },
    spaceBetween: 18,
    slidesPerView: 3,
    slidesPerGroup: 3,
    freeMode: {
        enabled: true,
        sticky: true
    },
    speed: 600,
    watchSlidesProgress: true
});

new Swiper(".product__swiper-big", {
    spaceBetween: 30,
    autoHeight: true,
    keyboard: true,
    speed: 600,
    // устанавливаем связь с мини-изображениями
    thumbs: {
      swiper: smallSwiper
    }
});

// Слайдер для фото (блок3)
new Swiper(".block3__swiper .swiper", {
    navigation: {
        nextEl: ".swiper-photo-button-next",
        prevEl: ".swiper-photo-button-prev"
    },
    pagination: {
        el: '.block3__swiper-pagination',
        clickable: true
    },
    spaceBetween: 20,
    slidesPerView: 1,
    freeMode: {
        enabled: true,
        sticky: true
    },
    keyboard: true,
    speed: 600,
    breakpoints: {
        481: {
            spaceBetween: 12,
            slidesPerView: 2
        },
        601: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 3
        },
        992: {
            spaceBetween: 25,
            slidesPerView: 3
        },
        1441: {
            spaceBetween: 30,
            slidesPerView: 3
        }
    }
});