// функция создания игрового поля определенной размерности, которая на вход принимает указанные значения пользователем
export default function gameFieldCreation(rowsNumber, columnsNumber) {
  // цикл создания строк игрового поля
  for (let i = 0; i < rowsNumber; i++) {
    const rowDiv = document.createElement("div"); // создаем новый элемент div
    rowDiv.classList.add("row"); // определяем к классу "row"
    //rowDiv.setAttribute("id", i); //устанавливаем аттрибут id со порядковыми значениями строк, начинающихся с 0
    //const newContent = document.createTextNode(""); // добавляем контент, в нашем случае просто пустое значение
    //rowDiv.appendChild(newContent);
    document.body.append(rowDiv);

    //const currentDiv = document.getElementById("div1"); // добавляем вновь созданный элемент div в DOM
    //document.body.insertBefore(rowDiv, currentDiv);

    // цикл создания ячеек игрового поля
    for (let i = 0; i < columnsNumber; i++) {
      const columnDiv = document.createElement("div"); // создаем новый элемент div
      columnDiv.classList.add("cells"); // определяем к классу "cells"
      columnDiv.setAttribute("id", i); //устанавливаем аттрибут id со порядковыми значениями строк, начинающихся с 0
      //const newContent = document.createTextNode(""); // добавляем контент, в нашем случае просто пустое значение
      //columnDiv.appendChild(newContent); // добавляем контент, в нашем случае просто пустое значение
      document.body.append(columnDiv);
      //const currentDiv = document.getElementById("div1"); // добавляем вновь созданный элемент div в DOM
      //document.body.insertBefore(columnDiv, currentDiv);
    }
  }
}
