//Задача 3.1 Изменение текста нескольких элементов из массива
 // Массив строк
 const stringsArray = ['Новый текст 1', 'Новый текст 2', 'Новый текст 3'];

 // Функция для изменения текста элементов
 function changeItemsText() {
     // Находим все элементы с классом item
     const items = document.querySelectorAll('.item');
     
     // Изменяем текст каждого элемента
     items.forEach((item, index) => {
         if (index < stringsArray.length) {
             item.textContent = stringsArray[index]; // Устанавливаем текст из массива
         }
     });
 }

 document.addEventListener('DOMContentLoaded', () => {
     const changeTextButton = document.getElementById('changeTextButton');

     // Добавляем обработчик события click на кнопку
     changeTextButton.addEventListener('click', changeItemsText);
 });

//Задача 3.2 Создание элементов списка на основе массива объектов
 // Массив объектов, представляющих товары
 const products = [
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 200 },
    { id: 3, name: 'Товар 3', price: 300 }
];

// Функция для создания элементов списка и добавления их в ul
function loadProducts() {
    const productList = document.getElementById('productList');

    // Очищаем список перед добавлением новых элементов
    productList.innerHTML = '';

    // Создаем элементы li для каждого товара
    products.forEach(product => {
        const listItem = document.createElement('li');  // Создаем новый элемент списка
        listItem.textContent = `${product.name} - ${product.price} руб.`;  // Устанавливаем текст элемента
        productList.appendChild(listItem);  // Добавляем элемент в список
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const loadProductsButton = document.getElementById('loadProductsButton');

    // Добавляем обработчик события click на кнопку
    loadProductsButton.addEventListener('click', loadProducts);
});

//Задача 3.3 Добавление классов к элементам из массива объектов
 // Массив объектов с идентификаторами элементов
 const itemsToHighlight = [
    { id: 'item1' },
    { id: 'item3' }
];

// Функция для добавления класса highlight к элементам
function highlightItems() {
    itemsToHighlight.forEach(item => {
        const element = document.getElementById(item.id); // Находим элемент по id
        if (element) {
            element.classList.add('highlight'); // Добавляем класс highlight
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const highlightButton = document.getElementById('highlightButton');

    // Добавляем обработчик события click на кнопку
    highlightButton.addEventListener('click', highlightItems);
});

//Задача 3.4 Динамическое создание таблицы из массива объектов
// Массив объектов, представляющих строки таблицы
const data = [
    { name: 'Товар 1', price: 100, quantity: 5 },
    { name: 'Товар 2', price: 200, quantity: 3 },
    { name: 'Товар 3', price: 300, quantity: 7 }
];

// Функция для создания таблицы
function generateTable() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новой таблицы

    const table = document.createElement('table'); // Создаем элемент таблицы
    const headerRow = document.createElement('tr'); // Создаем строку заголовка

    // Создаем заголовки таблицы
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header.charAt(0).toUpperCase() + header.slice(1); // Заглавная буква
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow); // Добавляем строку заголовка в таблицу

    // Создаем строки таблицы
    data.forEach(item => {
        const row = document.createElement('tr'); // Создаем новую строку

        // Создаем ячейки для каждого свойства объекта
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value; // Устанавливаем текст ячейки
            row.appendChild(td); // Добавляем ячейку в строку
        });

        table.appendChild(row); // Добавляем строку в таблицу
    });

    tableContainer.appendChild(table); // Добавляем таблицу в контейнер
}

document.addEventListener('DOMContentLoaded', () => {
    const generateTableButton = document.getElementById('generateTableButton');

    // Добавляем обработчик события click на кнопку
    generateTableButton.addEventListener('click', generateTable);
});

//Задача 3.5 Изменение стилей нескольких элементов из массива
// Массив объектов с id элементов и стилями
const styles = [
    { id: 'box1', styles: { backgroundColor: 'red', borderRadius: '10px' } },
    { id: 'box2', styles: { backgroundColor: 'green', borderRadius: '20px' } },
    { id: 'box3', styles: { backgroundColor: 'blue', borderRadius: '30px' } }
];

// Функция для изменения стилей элементов
function applyStyles() {
    styles.forEach(item => {
        const element = document.getElementById(item.id); // Находим элемент по id
        if (element) {
            Object.assign(element.style, item.styles); // Применяем стили к элементу
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const applyStylesButton = document.getElementById('applyStylesButton');

    // Добавляем обработчик события click на кнопку
    applyStylesButton.addEventListener('click', applyStyles);
});