//Задача 1.1 Изменение текста при клике на кнопку
function changeHeader() {
    document.getElementById("header").innerText = "Заголовок изменен!";
}

//Задача 1.2 Добавление класса при наведении мыши
document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('mouseover', () => {
        box.classList.add('hovered');
    });

    box.addEventListener('mouseout', () => {
        box.classList.remove('hovered');
    });
});

//Задача 1.3 Отслеживание изменений в текстовом поле
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    const output = document.getElementById('output');

    inputField.addEventListener('input', () => {
        output.textContent = inputField.value;
    });
});

//Задача 1.4 Изменение фона при двойном клике
document.addEventListener('DOMContentLoaded', () => {
const backgroundBox = document.getElementById('backgroundBox');

        backgroundBox.addEventListener('dblclick', () => {
            backgroundBox.style.backgroundColor = 'green';
    });
});

//Задача 1.5 Включение/отключение кнопки при изменении чекбокса
document.addEventListener('DOMContentLoaded', () => {
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const submitButton = document.getElementById('submitButton');

    agreeCheckbox.addEventListener('change', () => {
        if (agreeCheckbox.checked) {
            submitButton.disabled = false;
            submitButton.classList.add('active');
        } else {
            submitButton.disabled = true;
            submitButton.classList.remove('active');
        }
    });
});
        
//Задача 1.6 Отслеживание изменения размера окна
document.addEventListener('DOMContentLoaded', () => {
    const windowSize = document.getElementById('windowSize');

            function updateWindowSize() {
                const width = window.innerWidth;
                const height = window.innerHeight;
                windowSize.textContent = `Текущий размер окна: ${width}px x ${height}px`;
            }

            // Сразу показать текущий размер окна при загрузке страницы
            updateWindowSize();

            // Обновлять размер при изменении окна
            window.addEventListener('resize', updateWindowSize);
});

//Задача 1.7 Изменение текста при наведении на ссылку
document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('link');

            // Сохраним исходный текст ссылки
            const originalText = link.textContent;

            // Изменение текста при наведении мыши
            link.addEventListener('mouseover', () => {
                link.textContent = "Вы навели мышь";
            });

            // Возвращение исходного текста при уходе мыши
            link.addEventListener('mouseout', () => {
                link.textContent = originalText;
            });
    });

//Задача 1.8 Скрытие элемента при клике
document.addEventListener('DOMContentLoaded', () => {
    const hideMeElement = document.getElementById('hideMe');

            hideMeElement.addEventListener('click', () => {
                hideMeElement.style.display = 'none';
            });
});

//Задача 1.9 Ограничение длины вводимого текста
document.addEventListener('DOMContentLoaded', () => {
    const textField = document.getElementById('textField');

    textField.addEventListener('input', () => {
        if (textField.value.length > 10) {
            textField.value = textField.value.substring(0, 10);
        }
    });
});

//Задача 1.10 Переключение классов при клике
document.addEventListener('DOMContentLoaded', () => {
const toggleBox = document.getElementById('toggleBox');
        const toggleButton = document.getElementById('toggleButton');

        toggleButton.addEventListener('click', () => {
            toggleBox.classList.toggle('active');
            toggleBox.classList.toggle('inactive');

            // Обновление текста в элементе toggleBox
            if (toggleBox.classList.contains('active')) {
                toggleBox.textContent = "Текущий класс: active";
            } else {
                toggleBox.textContent = "Текущий класс: inactive";
            }
        });
});







