document.addEventListener("DOMContentLoaded", function() {
    // Получаем элементы
    var modal = document.getElementById("modal");
    var btn = document.querySelector(".subscribe__button");
    var span = document.querySelector(".close");
    var input = document.querySelector(".subscribe__input"); // Поле ввода
    var userEmail = document.getElementById("user-email"); // Место для почты в модальном окне

    // Открываем модальное окно при нажатии на кнопку
    btn.onclick = function() {
        // Получаем значение из поля ввода
        var emailValue = input.value;

        // Проверяем, что поле не пустое
        if (emailValue) {
            // Вставляем введённую почту в модальное окно
            userEmail.textContent = emailValue;

            // Показываем модальное окно
            modal.style.display = "block";
        } else {
            alert("Please enter your email.");
        }
    }

    // Закрываем модальное окно при нажатии на "x"
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрываем модальное окно, если пользователь кликает вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Получаем элементы
    var searchInput = document.querySelector(".search__input");
    var tags = document.querySelectorAll(".search__tag");

    // Функция для фильтрации тегов
    searchInput.addEventListener("input", function() {
        var filter = searchInput.value.toLowerCase();

        // Проходимся по каждому тегу
        tags.forEach(function(tag) {
            var tagName = tag.textContent.toLowerCase();

            // Проверяем, если тег содержит введённый текст
            if (tagName.includes(filter)) {
                tag.style.display = "inline-block"; // Показываем тег, если совпадает
            } else {
                tag.style.display = "none"; // Скрываем тег, если не совпадает
            }
        });
    });
});



// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector('.burger').addEventListener('click', function () {
//         document.querySelector('.header__menu').classList.toggle('active');
//     });
// });


const burgerMenu = document.getElementById("burgerMenu");

document.querySelector(".burger").addEventListener("click", (event) => {
    // Set css parameter's
    burgerMenu.style.cssText = `
        width: 100%;
        height: 500px;
        background-color: #220E43;
        position: absolute;
        top: 100px;
        z-index: 999;
        text-align: center;
    `;

    burgerMenu.show();
})

// Event to close dialog
document.getElementById("imgToClose").onclick = (event) => {
    burgerMenu.close();
}