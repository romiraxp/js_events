// функция создания игрового поля определенной размерности, которая на вход принимает указанные значения пользователем
export default function gameFieldCreation(rowsNumber, columnsNumber) {
  // цикл создания строк игрового поля
  for (let i = 0; i < rowsNumber; i++) {
    const rowDiv = document.createElement("div"); // создаем новый элемент div
    rowDiv.classList.add("row"); // определяем к классу "row"
    document.body.append(rowDiv);

    // цикл создания ячеек игрового поля
    for (let i = 0; i < columnsNumber; i++) {
      const columnDiv = document.createElement("div"); // создаем новый элемент div
      columnDiv.classList.add("cells"); // определяем к классу "cells"
      columnDiv.setAttribute("id", i); //устанавливаем аттрибут id со порядковыми значениями строк, начинающихся с 0
      document.body.append(columnDiv);
    }
  }
}
