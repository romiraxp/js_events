// функция создания игрового поля определенной размерности, которая на вход принимает указанные значения пользователем
export default class Table {
  constructor(cntRow, cntClmn) {
    this.cntRow = cntRow;
    this.cntClmn = cntClmn;
  }

  gameFieldCreation(rowsNumber, columnsNumber) {
    const gameField = document.querySelector(".game_field");

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
      }
    }
  }

  gameFieldCleaning() {
    const listOfDivCells = document.querySelectorAll(".cells"); // получаем список элементов div class="cells"
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
  }
}
