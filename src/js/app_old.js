// TODO: write code here

//import { getRandomArbitrary } from "./firstshow";
//import getRandomArbitrary from "./firstshow";
import goblin_small from "../../pic/goblin_small.png"; // для того, чтобы изображение отображалосьб после сборки webpack, импортируем его

document.addEventListener("DOMContentLoaded", () => {
  // функция получения случайного значения
  function getRandomValue(min, max) {
    return Math.round(Math.random() * (max - min) + min, 0);
  }

  const showInterval = setInterval(() => {
    let randomValue = getRandomValue(0, 8); //получаем случайное значение id от 0 до 15, которыми являются ячейки таблицы
    //document.getElementById(randomValue).innerHTML ='<img src="../pic/goblin_small.png">';
    document.getElementById(randomValue).innerHTML =
      `<img src=${goblin_small}>`; // к полученному id тега td приписываем путь к картинке гоблина
    // остановить процесс показа гоблина случайным порядком по истечении 10 сек
    setTimeout(() => {
      clearInterval(showInterval);
    }, 10000);
  }, 1000);
});
