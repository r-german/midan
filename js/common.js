// Ширина полосы прокрутки
let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
window.addEventListener("resize", function() {
    scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
});

// Бургер-меню
const menuIcon = document.querySelector('.header__burger-icon-wrapper');
const menuNav = document.querySelector('.header__nav');
const rectangle = document.querySelector('.header__rectangle');
const wrapper = document.querySelector('.wrapper');
menuIcon.addEventListener('click', function() {
    // запретим прокрутку страницы сайта при открытом бургер-меню
    wrapper.classList.toggle('_lock');
    // происходит анимация иконки при клике на неё
    menuIcon.classList.toggle('_active');
    // меню и белая полоска появляются при нажатии на иконку “menuIcon”
    menuNav.classList.toggle('_active');
    rectangle.classList.toggle('_active');
    // содержимое страницы не сдвигается в сторону во время исчезновения/появления полосы прокрутки (на ноутбуках и планшетах)
    if(menuIcon.classList.contains('_active')) {
        wrapper.style.cssText = `padding-right: ${scrollbarWidth}px;`;
    }
    else {wrapper.style.cssText = '';}
});

// Спойлер "Каталог" (моб)
const catalogButton = document.querySelector(".catalog__icon-mob");
const catalogContent = document.querySelector('.catalog__dropdown-lists');
catalogButton.addEventListener("click", function() {
    this.parentElement.classList.toggle("_open");
    if(this.parentElement.classList.contains("_open")) {
        catalogContent.style.maxHeight = catalogContent.scrollHeight + "px";
        if(companyButton.parentElement.classList.contains("_open")) {
            companyContent.style.maxHeight = "";
            companyButton.parentElement.classList.remove("_open");
        }
    }
    else {
        if(catalogContent.style.maxHeight = "max-content") {
            catalogContent.style.maxHeight = catalogContent.scrollHeight + "px";
            void catalogContent.offsetHeight;
        }
        catalogContent.style.maxHeight = "";
    }
});

// Спойлеры внутри спойлера "Каталог" (моб)
const spButtons = document.querySelectorAll(".arrow-mob");
spButtons.forEach(pressedSpButton => {
    pressedSpButton.addEventListener("click", function() {
        // сбрасываем фиксированную высоту спойлера "Каталог"
        catalogContent.style.cssText = 'max-height: max-content';
        // жмём на стрелку спойлера => её родителю присваивается класс “_open”;
        // если такой класс у родителя стрелки уже есть, то он лишится данного класса
        this.parentElement.classList.toggle("_open");
        // получим объект “spContent” (расположен сразу после стрелки спойлера в html)
        let spContent = this.nextElementSibling;
        // если родителю стрелки присвоен класс “_open”, то высота объекта “spContent” равна высоте контента, находящегося внутри “spContent”; иначе высота = нулю
        if(this.parentElement.classList.contains("_open")) {
            spContent.style.maxHeight = spContent.scrollHeight + "px";
        } else {
            spContent.style.maxHeight = "";
        }
        // спойлер закрывается при клике не только на него, но и на другой спойлер
        spButtons.forEach(anySpButton => {
            let spContent = anySpButton.nextElementSibling;
            if(anySpButton != this) {
                spContent.style.maxHeight = "";
                anySpButton.parentElement.classList.remove("_open");
            }
        });
    });
});

// Спойлер "О компании" (моб)
const companyButton = document.querySelector(".company__arrow-mob");
const companyContent = document.querySelector('.company__dropdown-list');
companyButton.addEventListener("click", function() {
    this.parentElement.classList.toggle("_open");
    if(this.parentElement.classList.contains("_open")) {
        companyContent.style.maxHeight = companyContent.scrollHeight + "px";
        if(catalogButton.parentElement.classList.contains("_open")) {
            catalogContent.style.maxHeight = catalogContent.scrollHeight + "px";
            void catalogContent.offsetHeight;
            catalogContent.style.maxHeight = "";
            catalogButton.parentElement.classList.remove("_open");
        }
    }
    else {companyContent.style.maxHeight = "";}
});

// Выпадающие списки с ссылками "Каталог" и "О компании" (>1440px; сенсорные устройства)
const catalogIcon = document.querySelector('.catalog__icon-pc');
const companyIcon = document.querySelector('.company__arrow-pc');
catalogIcon.addEventListener('click', function(){
    this.parentElement.classList.toggle('_tab-open');
    if(companyIcon.parentElement.classList.contains('_tab-open')) {
        companyIcon.parentElement.classList.remove('_tab-open');
    }
});
companyIcon.addEventListener('click', function(){
    this.parentElement.classList.toggle('_tab-open');
    if(catalogIcon.parentElement.classList.contains('_tab-open')) {
        catalogIcon.parentElement.classList.remove('_tab-open');
    }
});