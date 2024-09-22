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

// Вкладки "Описание..." (<992px)
const tabTitles = document.querySelectorAll("h5 label");
tabTitles.forEach(pressedTabTitle => {
    pressedTabTitle.addEventListener("click", function() {
        // жмём на вкладку => ей присваивается класс “_open”
        this.classList.add("_open");
        // найдем объект “tabContent” ("tabs__content" в html)
        let tabContent = this.parentElement.nextElementSibling;
        // если вкладке присвоен класс “_open”, её содержимое раскрывается;
        // "setTimeout" нужен, чтобы вкладка успела получить "display: block;" до того, как будет рассчитана её высота
        if(this.classList.contains("_open")) {
            setTimeout(() => {
                tabContent.style.maxHeight = tabContent.scrollHeight + "px";
            }, "10");
        }
        // вкладка закрывается при клике на другую вкладку
        tabTitles.forEach(anyTabTitle => {
            let tabContent = anyTabTitle.parentElement.nextElementSibling;
            if (anyTabTitle != this) {
                setTimeout(() => {
                    tabContent.style.maxHeight = "";
                    anyTabTitle.classList.remove("_open");
                }, "10");
            }
        });
        // прокрутка к данному блоку; иначе на моб.устройствах вкладка будет пропадать из видимой области из-за того, что внутри неё много контента
        window.scrollTo({
            top: document.querySelector('.block2').getBoundingClientRect().top + scrollY
        });
    });
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

// Слайдер для видео (блок3)
new Swiper(".block3__swiper .swiper", {
    navigation: {
        nextEl: ".swiper-video-button-next",
        prevEl: ".swiper-video-button-prev"
    },
    pagination: {
        el: '.block3__swiper-pagination',
        clickable: true
    },
    spaceBetween: 20,
    slidesPerView: 1,
    simulateTouch: false,
    freeMode: {
        enabled: true,
        sticky: true
    },
    keyboard: true,
    speed: 600,
    breakpoints: {
        601: {
            spaceBetween: 12,
            slidesPerView: 2
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        992: {
            spaceBetween: 25,
            slidesPerView: 2
        },
        1441: {
            spaceBetween: 30,
            slidesPerView: 2
        }
    }
});