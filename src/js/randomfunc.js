// функция получения случайного значения из переданного диапазана, в нашем случае это размерность списка
export default function getRandomValue(max) {
  return Math.floor(Math.random() * max);
  //return Math.round(Math.random() * (max - min) + min, 0);
}
