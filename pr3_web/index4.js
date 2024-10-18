//Задача 4.1 Динамическое создание галереи с переключением стилей и обработкой кликов
  // Массив объектов с данными для галереи
  const images = [
    { src: 'https://via.placeholder.com/150', alt: 'Изображение 1' },
    { src: 'https://via.placeholder.com/150', alt: 'Изображение 2' },
    { src: 'https://via.placeholder.com/150', alt: 'Изображение 3' },
    { src: 'https://via.placeholder.com/150', alt: 'Изображение 4' },
    { src: 'https://via.placeholder.com/150', alt: 'Изображение 5' },
    { src: 'https://via.placeholder.com/150', alt: 'Изображение 6' },
];

// Функция для создания галереи
function createGallery() {
    const galleryContainer = document.getElementById('galleryContainer');

    images.forEach(image => {
        const imgElement = document.createElement('img'); // Создаем элемент img
        imgElement.src = image.src; // Устанавливаем источник изображения
        imgElement.alt = image.alt; // Устанавливаем альтернативный текст
        imgElement.classList.add('inactive'); // Устанавливаем класс inactive для уменьшения

        // Добавляем обработчик клика
        imgElement.addEventListener('click', () => {
            // Убираем класс active и добавляем inactive у всех изображений
            const allImages = document.querySelectorAll('.gallery img');
            allImages.forEach(img => {
                img.classList.remove('active'); // Убираем активный класс
                img.classList.add('inactive'); // Устанавливаем класс inactive
            });
            
            // Добавляем класс active к нажатому изображению
            imgElement.classList.remove('inactive'); // Убираем класс inactive
            imgElement.classList.add('active'); // Увеличиваем активное изображение
        });

        galleryContainer.appendChild(imgElement); // Добавляем изображение в галерею
    });
}

document.addEventListener('DOMContentLoaded', createGallery); // Создаем галерею после загрузки страницы


//Задача 4.2 Динамическая форма с валидацией и отображением результата
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        // Получаем значения из полей
        const nameInput = document.getElementById('name');
        const ageInput = document.getElementById('age');

        const name = nameInput.value;
        const age = parseInt(ageInput.value, 10);

        // Создаем новую строку таблицы
        const tableRow = document.createElement('tr');
        const nameCell = document.createElement('td');
        const ageCell = document.createElement('td');

        // Устанавливаем текст для ячеек
        nameCell.textContent = name;
        ageCell.textContent = age;

        // Проверяем возраст и применяем классы для строки
        if (age < 18) {
            tableRow.classList.add('error-row'); // Подсвечиваем строку красным
        }

        // Добавляем ячейки в строку
        tableRow.appendChild(nameCell);
        tableRow.appendChild(ageCell);

        // Добавляем строку в таблицу
        const tableBody = document.getElementById('userTable').querySelector('tbody');
        tableBody.appendChild(tableRow);

        // Очищаем поля формы
        nameInput.value = '';
        ageInput.value = '';
    });
});


//Задача 4.3 Таблица товаров с динамическим обновлением и фильтрацией
document.addEventListener('DOMContentLoaded', () => {
    // Массив объектов с товарами
const products = [
    { name: 'Товар 1', price: 500 },
    { name: 'Товар 2', price: 1500 },
    { name: 'Товар 3', price: 1000 },
    { name: 'Товар 4', price: 2000 },
    { name: 'Товар 5', price: 750 },
];

// Функция для создания таблицы
function createTable(products) {
    const productTableBody = document.getElementById('productTable').querySelector('tbody');
    productTableBody.innerHTML = ''; // Очищаем таблицу

    products.forEach(product => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const priceCell = document.createElement('td');

        nameCell.textContent = product.name;
        priceCell.textContent = product.price;

        row.appendChild(nameCell);
        row.appendChild(priceCell);
        productTableBody.appendChild(row);
    });
}

// Функция фильтрации товаров по минимальной цене
function filterProducts() {
    const minPriceInput = document.getElementById('minPrice');
    const minPrice = parseFloat(minPriceInput.value) || 0;

    const filteredProducts = products.filter(product => product.price > minPrice);
    createTable(filteredProducts);
}

// Добавляем обработчик события для фильтрации
document.getElementById('minPrice').addEventListener('input', filterProducts);

// Создаем таблицу при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    createTable(products);
});
});
