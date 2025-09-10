// функция очистки игрового поля
export default function gameFieldCleaning() {
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
