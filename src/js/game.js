//import Table from "./tablecreation";

export class Game {
  constructor(field, scoreDisplay) {
    this.field = field;
    this.scoreDisplay = scoreDisplay;
  }

  start(rowsNumber, columnsNumber) {
    const listOfDivCells = document.querySelectorAll(".cells"); // получаем список элементов div class="cells"
    const gameField = document.querySelector(".game_field");
    // если список не пустой, то пробегаемся по нему и удаляем каждый элемент
    if (listOfDivCells.length) {
      for (let i = 0; i < listOfDivCells.length; i++) {
        listOfDivCells[i].remove();
      }
    }

    const listOfDivRows = document.querySelectorAll(".row"); // получаем список элементов div class="row"
    // если список не пустой, то пробегаемся по нему и удаляем каждый элемент
    if (listOfDivRows.length) {
      for (let i = 0; i < listOfDivRows.length; i++) {
        listOfDivRows[i].remove();
      }
    }

    // цикл создания строк игрового поля
    for (let i = 0; i < rowsNumber; i++) {
      const rowDiv = document.createElement("div"); // создаем новый элемент div
      rowDiv.classList.add("row"); // определяем к классу "row"
      gameField.append(rowDiv);

      // цикл создания ячеек игрового поля
      for (let i = 0; i < columnsNumber; i++) {
        const columnDiv = document.createElement("div"); // создаем новый элемент div
        columnDiv.classList.add("cells"); // определяем к классу "cells"
        rowDiv.append(columnDiv);
        rowDiv.addEventListener("click", this.handleClick);
      }
    }
  }

/*stop() {
        clearInterval(intervalId);
        rowDiv.removeEventListener("click", this.handleClick);
    }
}*/

  handleClick(e) {
    const totalSuccess = document.querySelector(".cells_success"); // здесь будет происходить подсчет успешных кликов по гоблину
    const totalMiss = document.querySelector(".cells_miss"); // здесь будет происходить подсчет промахов
    const res = document.querySelector(".result"); // некий всплывающий div с последующим сообщением о выигрыше или проигрыше
    let gameOver = false; // в переменной gameOver будем хранить состояние игры, изначально игра не окончена, а значит значение false
  
    if (e.target.closest("img")) {
      totalSuccess.textContent = Number(totalSuccess.textContent) + 1; //подсчет успешных кликов и запись в отведенный div
      if (Number(totalSuccess.textContent) == 10) {
        let hex = "🥳".codePointAt(0).toString(16);
        let emo = String.fromCodePoint("0x" + hex);
        res.style.display = "block";
        res.style.color = "green";
        res.textContent = "You win!!" + emo;
        gameOver = true; // как только число успешных кликов достигло 10 меняем состояние переменной gameOver= true
        this.stop(gameOver);
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
          this.stop(gameOver);
        }
      }
  }
}