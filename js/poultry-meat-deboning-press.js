// Форма обратной связи
const fixedBlock = document.querySelector('.fixed-block');
const productButtons = document.querySelectorAll('.product__buttons button');
productButtons.forEach(productButton => {
    productButton.addEventListener("click", function() {
        // при клике на кнопку "Отправить заявку" открываем форму
        fixedBlock.style.cssText = `padding-right: ${scrollbarWidth}px; opacity: 1; visibility: visible;`;
        // содержимое страницы не сдвигается в сторону во время исчезновения/появления полосы прокрутки
        wrapper.style.cssText = `padding-right: ${scrollbarWidth}px;`;
        // блокируем прокрутку страницы
        document.body.classList.add('_lock');
    });
});

document.querySelector('.fixed-block img').addEventListener("click", function() {
    // при клике на крест закрываем форму
    fixedBlock.style.cssText = '';
    wrapper.style.cssText = '';
    // прокрутка страницы доступна
    document.body.classList.remove('_lock');
});

// Спойлеры "Вопрос-Ответ"
const spTitles = document.querySelectorAll(".spoilers__title");
spTitles.forEach(pressedSpTitle => {
    pressedSpTitle.addEventListener("click", function() {
        // жмём на вопрос => ему присваивается класс “_open”
        this.classList.toggle("_open");
        // получим ответ на вопрос “spAnswer” ("spoilers__content" в html)
        let spAnswer = this.nextElementSibling;
        // если вопросу присвоен класс “_open”, ответ раскрывается
        if(this.classList.contains("_open")) {
            spAnswer.style.maxHeight = spAnswer.scrollHeight + "px";
        } else {
            spAnswer.style.maxHeight = "";
        }
        // спойлер закрывается при клике не только на него, но и на другой спойлер
        spTitles.forEach(anySpTitle => {
            let spAnswer = anySpTitle.nextElementSibling;
            if (anySpTitle != this) {
                spAnswer.style.maxHeight = "";
                anySpTitle.classList.remove("_open");
            }
        });
    });
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