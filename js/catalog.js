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