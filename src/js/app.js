import Table from "./tablecreation";
import getRandomValue from "./randomfunc"; // импорт функции генератора случайных чисел
import goblin_small from "../../pic/goblin_small.png"; // для того, чтобы изображение отображалосьб после сборки webpack, импортируем его

document.addEventListener("DOMContentLoaded", () => {
  const btnStart = document.querySelector(".btns-start"); // находим кнопку Начать и помещаем в переменную btnStart
  const btnReset = document.querySelector(".btns-reset"); // находим кнопку Сброс и помещаем в переменную btnReset
  const imgToRemove = document.querySelector("img"); //т.к. по сути у нас всегда будет 1 гоблин, то помещаем в переменную для удаления первый найденный

  const gameField = document.querySelector(".game_field"); // в переменной gameField будем хранить div игрового поля
  const totalSuccess = document.querySelector(".cells_success"); // здесь будет происходить подсчет успешных кликов по гоблину
  const totalMiss = document.querySelector(".cells_miss"); // здесь будет происходить подсчет промахов
  const res = document.querySelector(".result"); // некий всплывающий div с последующим сообщением о выигрыше или проигрыше

  // обработчик кнопки сброс, по которой происходит обновление страницы
  btnReset.addEventListener("click", () => {
    location.reload();
  });

  btnStart.addEventListener("click", () => {
    const rowVal = document.querySelector("#number1").value; //получаем значение из поля ввода кол-ва строк
    const colVal = document.querySelector("#number2").value; //получаем значение из поля ввода кол-ва столбцов

    let gameOver = false; // в переменной gameOver будем хранить состояние игры, изначально игра не окончена, а значит значение false

    // функция обработчик кликов
    function counter(e) {
      // если мы кликнули по гоблины и попали, то увеличиваем число успешных кликов, иначе увеличиваем число неуспешных
      if (e.target.closest("img")) {
        totalSuccess.textContent = Number(totalSuccess.textContent) + 1; //подсчет успешных кликов и запись в отведенный div
        if (Number(totalSuccess.textContent) == 10) {
          let hex = "🥳".codePointAt(0).toString(16);
          let emo = String.fromCodePoint("0x" + hex);
          res.style.display = "block";
          res.style.color = "green";
          res.textContent = "You win!!" + emo;
          gameOver = true; // как только число успешных кликов достигло 10 меняем состояние переменной gameOver= true
        }
      } else {
        totalMiss.textContent = Number(totalMiss.textContent) + 1; //подсчет НЕ успешных кликов и запись в отведенный div
        if (Number(totalMiss.textContent) == 5) {
          let hex = "😟".codePointAt(0).toString(16);
          let emo = String.fromCodePoint("0x" + hex);
          res.style.display = "block";
          res.style.color = "red";
          res.textContent = "You lose" + emo;
          gameOver = true; // как только число НЕ успешных кликов достигло 5 меняем состояние переменной gameOver= true
        }
      }
    }
    // обработчки события "повешан" на игровое поле, что создает некий недостаток
    gameField.addEventListener("click", counter);

    if (!rowVal || !colVal) {
      alert("Заполните все поля");
    } else {
      btnStart.disabled = true // запрещаем последующие нажатия кнопки Начать
      const table = new Table();
      table.gameFieldCleaning(); // вызываем метод очистки игрового поля
      table.gameFieldCreation(rowVal, colVal); // вызываем метод, в которую передаем размерность нашего игрового поля

      let randomValue = 0; // задаем изначальное значение номера ячейки как первый индекс массива, с коорым затем будем сравнивать новое сгенерированное значение

      const img = document.createElement("img"); // создаем элемент image - наш гоблин
      const numCol = document.querySelectorAll(".cells"); // находим все элементы div- ячейки

      //в переменную sizeField помещаем размер массива - 1 элемент, тк. индексация с 0.
      // Мы его юудем использовать для генерации случайного значения- ячейки
      const sizeField = numCol.length;

      img.src = `${goblin_small}`; //добавляем аттрибут в виде пути импортированного значения

      let randomValue_new = getRandomValue(sizeField); //получаем случайное значение id от 0 до размерности поля, которыми являются ячейки таблицы

      const intervalId = setInterval(() => {
        //    const imgToRemove = document.querySelector("img"); //т.к. по сути у нас всегда будет 1 гоблин, то помещаем в переменную для удаления первый найденный
        // если изображение найдено, то удалем его сначала
        if (imgToRemove) {
          imgToRemove.remove();
        }

        // для того, чтобы гоблин "не падал" в ту же самую ячейку, сравниваем наше новое случайное значение с прошлым и,
        // если они разные, то добавляем гоблина в соотвтесвующую ячейку- div
        randomValue = randomValue_new;
        numCol[randomValue].append(img);

        //получаем случайное значение id от 0 до размерности поля, которыми являются ячейки таблиц
        while (randomValue == randomValue_new)
          randomValue_new = getRandomValue(sizeField);
        randomValue = randomValue_new;

        // остановить процесс показа гоблина случайным порядком по истечении 10 сек
        /*setTimeout(() => {
        clearInterval(showInterval);
    }, 3000);*/
        // останавливаем игру, когды gameOver= true и удаляем обработчик события
        if (gameOver) {
          clearInterval(intervalId);
          gameField.removeEventListener("click", counter);
        }
      }, 1000);
    }
  });
});
