import { Game } from "./game";
//import { Goblin } from "./goblin";
//import Table from "./tablecreation";
import getRandomValue from "./randomfunc"; // импорт функции генератора случайных чисел
import goblin_small from "../../pic/goblin_small.png"; // для того, чтобы изображение отображалосьб после сборки webpack, импортируем его
import { Goblin } from "./goblin";

document.addEventListener("DOMContentLoaded", () => {
  const btnStart = document.querySelector(".btns-start"); // находим кнопку Начать и помещаем в переменную btnStart
  const btnReset = document.querySelector(".btns-reset"); // находим кнопку Сброс и помещаем в переменную btnReset

  // обработчик кнопки сброс, по которой происходит обновление страницы
  btnReset.addEventListener("click", () => {
    location.reload();
  });

  btnStart.addEventListener("click", () => {
    const rowVal = document.querySelector("#number1").value; //получаем значение из поля ввода кол-ва строк
    const colVal = document.querySelector("#number2").value; //получаем значение из поля ввода кол-ва столбцов

    if (!rowVal || !colVal) {
      alert("Заполните все поля");
    } else {
      btnStart.disabled = true // запрещаем последующие нажатия кнопки Начать
      const img = document.createElement("img"); // создаем элемент image - наш гоблин
      let randomValue = 0; // задаем изначальное значение номера ячейки как первый индекс массива, с коорым затем будем сравнивать новое сгенерированное значение      
      
      const game = new Game(); 
      
      game.start(rowVal, colVal); // вызываем метод, в которую передаем размерность нашего игрового поля*/

      const numCol = document.querySelectorAll(".cells"); // находим все элементы div- ячейки

      //в переменную sizeField помещаем размер массива - 1 элемент, тк. индексация с 0.
      // Мы его юудем использовать для генерации случайного значения- ячейки
      const sizeField = numCol.length;

      img.src = `${goblin_small}`; //добавляем аттрибут в виде пути импортированного значения
      
      const goblin = new Goblin(img);
      
      let randomValue_new = getRandomValue(sizeField); //получаем случайное значение id от 0 до размерности поля, которыми являются ячейки таблицы

      const intervalId = setInterval(() => {
        //    const imgToRemove = document.querySelector("img"); //т.к. по сути у нас всегда будет 1 гоблин, то помещаем в переменную для удаления первый найденный
        // если изображение найдено, то удалем его сначала

        // для того, чтобы гоблин "не падал" в ту же самую ячейку, сравниваем наше новое случайное значение с прошлым и,
        // если они разные, то добавляем гоблина в соотвтесвующую ячейку- div
        randomValue = randomValue_new;
        goblin.show(randomValue)
//        numCol[randomValue].append(img);
        const imgToRemove = document.querySelector("img"); //т.к. по сути у нас всегда будет 1 гоблин, то помещаем в переменную для удаления первый найденный
        //получаем случайное значение id от 0 до размерности поля, которыми являются ячейки таблиц
        while (randomValue == randomValue_new)
          randomValue_new = getRandomValue(sizeField);
          randomValue = randomValue_new;
        console.log(randomValue);

/*        if (imgToRemove) {
          imgToRemove.remove();
        }*/

        // остановить процесс показа гоблина случайным порядком по истечении 10 сек
        /*setTimeout(() => {
        clearInterval(showInterval);
    }, 3000);*/
        // останавливаем игру, когды gameOver= true и удаляем обработчик события
//        game.stop()
/*        if (gameOver) {
          clearInterval(intervalId);
          gameField.removeEventListener("click", counter);
        }*/
      }, 1000);
    }
  });
});
