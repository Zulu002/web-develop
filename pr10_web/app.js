
// 1. Простое использование then
//Метод .then используется для обработки успешного выполнения промиса. Как только промис завершится, в консоль будет выведено сообщение "Принято".
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Принято"), 1000);
  });
promise1.then((result) => console.log(result));

// 2. Использование catch
//Метод .catch перехватывает эту ошибку, и error.message выводится в консоль.
const promise2 = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Мой лорд, казана опустела")), 1000);
  });
  
promise2.catch((error) => console.log(error.message));
  
// 3. Использование finally
// Метод .finally запускается независимо от того, был ли промис успешным или отклоненным, и выводит "Я будут работать несмотря ни на что".
const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Принято"), 1000);
  });
  
  promise3
    .then((result) => console.log(result))
    .finally(() => console.log("Я будут работать несмотря ни на что"));
  
// 4. Использование async/await
// Как только промис разрешится, результат "Async Success" выводится в консоль.
async function asyncFunction() {
    const promise4 = new Promise((resolve) => {
      setTimeout(() => resolve("Async принят"), 2000);
    });
  
    const result = await promise4;
    console.log(result);
  }
  
  asyncFunction();
  
// 5. Обработка ошибок в async/await
// try/catch блок обрабатывает ошибку. Когда промис отклоняется, выполнение переходит в блок catch, и выводится сообщение ошибки "Error occurred"
async function asyncErrorHandling() {
    const promise5 = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Произошла ошибка")), 1000);
    });
  
    try {
      const result = await promise5;
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
  
asyncErrorHandling();
  
// 6. Параллельное выполнение с Promise.all
// Promise.all ждет завершения всех промисов, после чего возвращает массив результатов ["First", "Second", "Third"]. Как только все промисы завершаются, выводится массив результатов.
const promise6a = new Promise((resolve) => setTimeout(() => resolve("Первый"), 1000));
const promise6b = new Promise((resolve) => setTimeout(() => resolve("Второй"), 2000));
const promise6c = new Promise((resolve) => setTimeout(() => resolve("Третий"), 1500));

Promise.all([promise6a, promise6b, promise6c]).then((results) => console.log(results));

// 7. Использование Promise.race
//Promise.race возвращает результат первого выполненного промиса. В данном случае это будет promise7a, который разрешается за 1000 миллисекунд и возвращает Быстрый. Выводится "Быстрый".
const promise7a = new Promise((resolve) => setTimeout(() => resolve("Быстрый"), 1000));
const promise7b = new Promise((resolve) => setTimeout(() => resolve("Мертвый"), 2000));

Promise.race([promise7a, promise7b]).then((result) => console.log(result));

// 8. Цепочка промисов с несколькими then

const promise8 = new Promise((resolve) => resolve(1));

promise8
  .then((value) => value + 1)
  .then((value) => value * 2)
  .then((value) => console.log(value)); // Output: 4

// 9. Использование Promise.resolve
// Promise.resolve немедленно создает успешно завершенный промис с результатом "Immediate Success".
const promise9 = Promise.resolve("Немедленный успех");
promise9.then((result) => console.log(result));

// 10. Использование Promise.reject
//Promise.reject немедленно создает отклоненный промис с ошибкой "Immediate Failure".
const promise10 = Promise.reject(new Error("Немедленный отказ"));
promise10.catch((error) => console.log(error.message));
// 