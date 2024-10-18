//Задача 2.1 Создание элемента и добавление его в DOM
document.addEventListener('DOMContentLoaded', () => {
    // Создание кнопки
    const button = document.createElement('button');
    button.textContent = 'Нажми меня';

    // Добавление обработчика события для кнопки
    button.addEventListener('click', () => {
        alert('Кнопка нажата!');
    });

    // Добавление кнопки в конец документа
    document.body.appendChild(button);
});

//Задача 2.2 Добавление класса к элементу
document.addEventListener('DOMContentLoaded', () => {
    // Находим элемент с id example
    const exampleElement = document.getElementById('example');
    const highlightButton = document.getElementById('highlightButton');

    // Добавляем обработчик события для кнопки
    highlightButton.addEventListener('click', () => {
        exampleElement.classList.add('highlight'); // Добавляем класс highlight
    });
});

//Задача 2.3 Удаление класса у элемента
document.addEventListener('DOMContentLoaded', () => {
     // Находим элемент с классом button
     const buttonElement = document.querySelector('.button');

     // Добавляем обработчик события для кнопки
     buttonElement.addEventListener('click', () => {
         buttonElement.classList.remove('active'); // Удаляем класс active
     });
});

//Задача 2.4 Изменение стилей элемента
document.addEventListener('DOMContentLoaded', () => {
     // Находим первый элемент с классом box
     const boxElement = document.querySelector('.box');

     // Устанавливаем ширину, высоту и цвет фона
     boxElement.style.width = '100px';
     boxElement.style.height = '100px';
     boxElement.style.backgroundColor = 'red';
});

//Задача 2.5 Изменение текста элемента
document.addEventListener('DOMContentLoaded', () => {
    // Находим элемент с id header
    const headerElement = document.getElementById('header');
    const changeHeaderButton = document.getElementById('changeHeaderButton');

    // Добавляем обработчик события для кнопки
    changeHeaderButton.addEventListener('click', () => {
        headerElement.textContent = 'Добро пожаловать!'; // Изменяем текст заголовка
    });
});

//Задача 2.6 Добавление обработчика события
document.addEventListener('DOMContentLoaded', () => {
    // Находим кнопку с id myButton
    const myButton = document.getElementById('myButton');

    // Добавляем обработчик события click
    myButton.addEventListener('click', () => {
        console.log('Кнопка нажата'); // Выводим сообщение в консоль
    });
});

//Задача 2.7 Добавление элементов списка
document.addEventListener('DOMContentLoaded', () => {
    // Находим список и кнопку
    const myList = document.getElementById('myList');
    const addItemButton = document.getElementById('addItemButton');

    // Добавляем обработчик события click на кнопку
    addItemButton.addEventListener('click', () => {
        const newItem = document.createElement('li');  // Создаем новый элемент списка
        newItem.textContent = 'Новый элемент';  // Устанавливаем текст нового элемента
        myList.appendChild(newItem);  // Добавляем новый элемент в конец списка
    });
});

//Задача 2.8 Удаление элемента из DOM
document.addEventListener('DOMContentLoaded', () => {
    // Находим элемент с id deleteMe и кнопку
    const deleteMeElement = document.getElementById('deleteMe');
    const deleteButton = document.getElementById('deleteButton');

    // Добавляем обработчик события click на кнопку
    deleteButton.addEventListener('click', () => {
        deleteMeElement.remove();  // Удаляем элемент из документа
    });
});
//Задача 2.9 Манипуляция с атрибутами
document.addEventListener('DOMContentLoaded', () => {
    // Находим элемент с id link и кнопку
    const linkElement = document.getElementById('link');
    const changeLinkButton = document.getElementById('changeLinkButton');

    // Добавляем обработчик события click на кнопку
    changeLinkButton.addEventListener('click', () => {
        linkElement.href = 'https://www.example.com';  // Изменяем атрибут href
        linkElement.textContent = 'Перейти на Example'; // Меняем текст ссылки (опционально)
    });
});

//Задача 2.10 Поиск нескольких элементов и изменение их стилей
document.addEventListener('DOMContentLoaded', () => {
    const changeColorButton = document.getElementById('changeColorButton');

    // Добавляем обработчик события click на кнопку
    changeColorButton.addEventListener('click', () => {
        // Находим все элементы с классом highlight
        const highlightedElements = document.querySelectorAll('.highlight');
        
        // Изменяем цвет текста на синий для каждого элемента
        highlightedElements.forEach(element => {
            element.style.color = 'blue';
        });
    });
});