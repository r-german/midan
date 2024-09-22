// Форма обратной связи
const fixedBlock = document.querySelector('.fixed-block');
const modalWindowButton = document.querySelector('.calls-modal-window');
modalWindowButton.addEventListener("click", function() {
    // при клике на данный объект открываем форму
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