// Форма обратной связи
const fixedBlock = document.querySelector('.fixed-block');
document.querySelector('.block1 .form-button').addEventListener("click", function() {
    // при клике на кнопку "Обратная связь" открываем форму
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