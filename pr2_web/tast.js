// Задача 1.1 Площадь прямоугольника
// var length = 10
// var width = 15
// var area_of_a_rectangle = length * width
// console.log("Площадь прямоугольника по ширине и длине >>",area_of_a_rectangle)

// Задача 1.2 Периметр квадрата
// var length = 10
// var width = 15
// var perimeter_of_a_square = (length + width)*2
// console.log(" Периметр квадрата >>",perimeter_of_a_square )

// Задача 1.3 Температура по Фаренгейту
// var сelsius = 23
// var conversion_to_fahrenheit = (сelsius * 9/5) + 32
// console.log(" Температура по Фаренгейту >>",conversion_to_fahrenheit )

// Задача 1.4 Остаток от деления
// var a = 10
// var b = 3
// console.log(" Остаток от деления >>", a % b )

// Задача 1.5 Умножение двух чисел
// var a = 5
// var b = 4
// console.log("Умножение двух чисел >>", a*b)

// Задача 1.6 Проверка на четность
// var number = 3
// console.log(" Проверка на четность >>", number % 2 === 0 )

// Задача 1.7 Перевод времени
// var hour = 5
// console.log(" Перевод времени >>", hour * 60, "минут" )

// Задача 1.8 Сравнение двух чисел
// let a = 3
// let b = 4
// if (a > b) console.log(" Сравнение двух чисел >>", a, "больше", b)
// if (a < b) console.log(" Сравнение двух чисел >>", b, "больше", a)
// if (a === b) console.log(" Сравнение двух чисел >>", a,"и",b, "равны")

// Задача 1.9 Возраст пользователя
// let date_of_birth = 2005
// console.log(" Возраст пользователя >>", 2024 - date_of_birth)


// Задача 1.10 Простое сложение
// let a = 20
// let b = 23
// console.log(" Простое сложение >>", a + b)


// Задача 2.1 Вывести числа от 1 до 10
// let N = 4
// console.log("Вывести числа от 1 до 10 ")
// for (let i = 0; i < N; i++) {
//     console.log(i)
//   }

// Задача 2.2 Сумма чисел от 1 до N
// let N = 4
// let sum = 0
// for (let i = 0; i < N; i++) {
//     sum = i + sum
//   }
//   console.log("Сумма чисел от 1 до N ", sum)

// Задача 2.3 Факториал числа
// let N = 4
// let sum = 1
// for (let i = 1; i < N; i++) {
//     sum = i * sum
//   }
//   console.log("Факториал числа ", sum)

// Задача 2.4 Вывод четных чисел
// console.log("Вывод четных чисел ")
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Задача 2.5 Таблица умножения на 5
// for (let i = 1; i <= 10; i++) {
//     console.log(i * 5)
// }

// Задача 2.6 Сумма чисел кратных 3
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         sum += i;
//     }
// }
// console.log("Сумма чисел от 1 до 50, кратных 3: " + sum);

// Задача 2.7 Обратный отсчёт
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// Задача 2.8 Произведение чисел от 1 до N
// let N = 10; 
// let product = 1; 
// for (let i = 1; i <= N; i++) {
//     product *= i; 
// }
// console.log(product); 

// Задача 2.9 Числа, кратные 7
// for (let i = 1; i <= 100; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }


// Задача 2.10 Печать символов
// let a = "x"
// let b = 6
// for (let i = 1; i <= b; i++) {
//     console.log(a);
// }


// Задача 3.1 Проверка числа на положительность
// let c = 4
// if ( c < 0) console.log("положительное");
// else console.log("отрицательное")

// Задача 3.2 Оценка по баллам
// let c = 60
// if ( c >= 90) console.log("отлично");
// else if ( c >= 70) {console.log("хорошо");}
// else if ( c >= 50) {console.log("пойдёт");}
// else {console.log("плохо")}

// Задача 3.3 Проверка деления на 3
// let number = prompt("Введите число:");
// number = parseInt(number, 10);
// if (number % 3 === 0) {
//     console.log("кратно 3");
// } else {
//     console.log("не кратно");
// }

// Задача 3.4 Четное или нечетное
// let number = prompt("Введите число:");
// number = parseInt(number, 10);
// if (number % 2 === 0) {
//     console.log("четно");
// } else {
//     console.log("не четно");
// }

// Задача 3.5 Наибольшее из двух чисел
// let number1 = prompt("Введите число:");
// let number2 = prompt("Введите число:");
// number1 = parseInt(number1, 10);
// number2 = parseInt(number2, 10);
// if (number1 > number2) {
//     console.log(number1);
// } else if(number1 = number2){
//     console.log("они равны");
// }else {
//     console.log(number2);
// }

// Задача 3.6 Проверка високосного года

// let year = prompt("Введите год:");
// year = parseInt(year, 10);
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year + " является високосным годом.");
// } else {
//     console.log(year + " не является високосным годом.");
// }

// Задача 3.7 Проверка температуры
// let number1 = prompt("Введите градусы:");
// number1 = parseInt(number1, 10);
// if (number1 > 10) {
//     console.log("куртка не нужна");
// }else {
//     console.log("холодно нужно надеть куртку");
// }

// Задача 3.8 Число делится на 5 и 11
// let с = prompt("Введите число:");
// с = parseInt(с, 10);
// if (с % 5 === 0 && с % 11 === 0){
//     console.log(с + " делится");
// } else {
//     console.log(с + " не делится");
// }

// Задача 3.9 Равны ли числа
// let number1 = prompt("Введите число:");
// let number2 = prompt("Введите число:");
// number1 = parseInt(number1, 10);
// number2 = parseInt(number2, 10);
// if (number1 === number2) {
//     console.log("они равны");
// } else {
//     console.log("они не равны");
// }

// Задача 3.10 Проверка символа
// let char = prompt("Введите символ:");  
// if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")){    
//      console.log(char + " является буквой.");  
// } else { console.log(char + " не является буквой.");  }


// // Задача 4.1 Сложение двух чисел
// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 3))
 
// // Задача 4.2 Умножение двух чисел
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(5, 3))

// // Задача 4.3 Проверка четности числа
// function isEven(num) {
//     return num % 2 === 0;
// }
// console.log(isEven(4))

// // Задача 4.4 Факториал числа
// function factorial(n) {
//     if (n < 0) return undefined; // Факториал для отрицательных чисел не определен
//     if (n === 0 || n === 1) return 1;
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5))

// // Задача 4.5 Проверка деления на 3
// function isDivisibleBy3(num) {
//     return num % 3 === 0;
// }
// console.log(isDivisibleBy3(9))

// // Задача 4.6 Перевод градусов Цельсия в Фаренгейты
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }
// console.log(celsiusToFahrenheit(0))

// // Задача 4.7 Возведение в степень
// function power(base, exponent) {
//     return Math.pow(base, exponent);
// }
// console.log(power(2, 3))

// // Задача 4.8 Минимум из двух чисел
// function min(a, b) {
//     return a < b ? a : b;
// }
// console.log(min(5, 3))

// // Задача 4.9 Максимум из двух чисел
// function max(a, b) {
//     return a > b ? a : b;
// }
// console.log(max(5, 3))

// // Задача 4.10 Проверка возраста
// function checkAge(age) {
//     return age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";
// }
// console.log(checkAge(16))

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Задача 5.1 Вывести каждый элемент массива
// numbers.forEach(element => {
//     console.log(element);
// });

// // Задача 5.2 Найти первый четный элемент массива
// let firstEven = numbers.find(element => element % 2 === 0);
// console.log("Первый четный элемент:", firstEven);

// // Задача 5.3 Добавить элемент в конец массива
// numbers.push(11);
// console.log("После добавления 11 в конец:", numbers);

// // Задача 5.4 Добавить элемент в начало массива
// numbers.unshift(0);
// console.log("После добавления 0 в начало:", numbers);

// // Задача 5.5 Удвоить значения всех элементов массива
// let doubledNumbers = numbers.map(element => element * 2);
// console.log("Удвоенные значения:", doubledNumbers);

// // Задача 5.6 Удалить последний элемент массива
// numbers.pop();
// console.log("После удаления последнего элемента:", numbers);

// // Задача 5.7 Удалить первый элемент массива
// numbers.shift();
// console.log("После удаления первого элемента:", numbers);

// // Задача 5.8 Объединить два массива
// let moreNumbers = [11, 12, 13];
// let combined = numbers.concat(moreNumbers);
// console.log("Объединенный массив:", combined);

// // Задача 5.9 Удалить элемент из массива по индексу
// let indexToRemove = 4;
// combined.splice(indexToRemove, 1);
// console.log("После удаления элемента по индексу 4:", combined);

// // Задача 5.10 Извлечь подмассив
// let subArray = combined.slice(0, 5); // Извлекаем первые 5 элементов
// console.log("Подмассив:", subArray);

// // Задача 5.11 Преобразовать массив в строку
// let joinedString = combined.join(", ");
// console.log("Массив как строка:", joinedString);

// // Задача 5.12 Преобразовать строку в массив
// let stringToArray = joinedString.split(", ");
// console.log("Строка как массив:", stringToArray);

// // Задача 5.13 Сумма всех чисел в массиве
// let sum = 0;
// numbers.forEach(element => {
//     sum += element;
// });
// console.log("Сумма всех чисел в массиве:", sum);

// // Задача 5.14 Увеличить каждое число в массиве на 10
// let increasedNumbers = numbers.map(element => element + 10);
// console.log("Каждое число увеличено на 10:", increasedNumbers);

// // Задача 5.15 Найти индекс первого отрицательного числа
// let negativeNumbers = [-1, 2, 3, -4, 5];
// let firstNegativeIndex = negativeNumbers.findIndex(element => element < 0);
// console.log("Индекс первого отрицательного числа:", firstNegativeIndex);

// Задача 6.1 Создать объект с именем и возрастом
let person = {
    name: "Иван", 
    age: 30
};
console.log("Имя:", person.name);
console.log("Возраст:", person.age);

// Задача 6.2 Добавить новое свойство в объект
person.city = "Москва";
console.log("Город:", person.city);

// Задача 6.3 Удалить свойство из объекта
delete person.age;
console.log("После удаления возраста:", person);

// Задача 6.4 Изменить значение свойства
person.name = "Алексей";
console.log("Новое имя:", person.name);

// Задача 6.5 Проверка наличия свойства
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}
console.log("Свойство 'city' существует?", hasProperty(person, "city"));

// Задача 6.6 Проверка значения свойства
function getPropertyValue(obj, prop) {
    return obj[prop];
}
console.log("Значение свойства 'city':", getPropertyValue(person, "city"));

// Задача 6.7 Сравнение двух объектов
function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
let anotherPerson = { name: "Алексей", city: "Москва" };
console.log("Объекты равны?", compareObjects(person, anotherPerson));

// Задача 6.8  Итерация по свойствам объекта
console.log("Свойства объекта person:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}