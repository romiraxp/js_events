//import Table from "./tablecreation";
import gameFieldCleaning from "./tableremoval"; // импорт функции очистки игрового поля
import gameFieldCreation from "./tablecreation"; // импорт функции создания игрового поля
import getRandomValue from "./randomfunc"; // импорт функции генератора случайных чисел
import goblin_small from "../../pic/goblin_small.png"; // для того, чтобы изображение отображалосьб после сборки webpack, импортируем его

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  const totalSuccess = document.querySelector(".cells_success");
  btn.addEventListener("click", () => {
    const rowVal = document.querySelector("#number1").value; //получаем значение из поля ввода кол-ва строк
    const colVal = document.querySelector("#number2").value; //получаем значение из поля ввода кол-ва столбцов

    if (!rowVal || !colVal) {
      alert("Заполните все поля");
    } else {
      //const table = new Table()
      //      table.gameFieldCleaning(); // вызываем фунцию очистки игрового поля
      //      table.gameFieldCreation(rowVal, colVal); // вызываем фунцию, в которую передаем размерность нашего игрового поля
      gameFieldCleaning(); // вызываем фунцию очистки игрового поля
      gameFieldCreation(rowVal, colVal); // вызываем фунцию, в которую передаем размерность нашего игрового поля

      let randomValue = 0; // задаем изначальное значение номера ячейки как первый индекс массива, с коорым затем будем сравнивать новое сгенерированное значение

      const img = document.createElement("img"); // создаем элемент image - наш гоблин
      const numCol = document.querySelectorAll(".cells"); // находим все элементы div- ячейки

      //в переменную sizeField помещаем размер массива - 1 элемент, тк. индексация с 0.
      // Мы его юудем использовать для генерации случайного значения- ячейки
      const sizeField = numCol.length;

      img.src = `${goblin_small}`; //добавляем аттрибут в виде пути импортированного значения

      let randomValue_new = getRandomValue(sizeField); //получаем случайное значение id от 0 до размерности поля, которыми являются ячейки таблицы

      setInterval(() => {
        const imgToRemove = document.querySelector("img"); //т.к. по сути у нас всегда будет 1 гоблин, то помещаем в переменную для удаления первый найденный
        // если изображение найдено, то удалем его сначала
        if (imgToRemove) {
          imgToRemove.addEventListener("click", (e) => {
            //debugger;
            e.preventDefault();
            e.target.closest("div");
            totalSuccess.textContent = Number(totalSuccess.textContent) + 1;
          });
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
      }, 1000);
    }
  });
});
