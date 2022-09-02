// это функция, внутри которой нужно написать ваш код
// roadMines (массив ячеек поля) будет задаваться в момент вызова функции,
// как в примере кода под ней
function moveTank(roadMines) {
  let foundMine = false;

  for (let i in roadMines) {
    if (roadMines[i] === false) {
      console.log(`танк переместился на ${parseInt(i) + 1}`);
    } else if (roadMines[i] === true && foundMine === false) {
      foundMine = true;
      console.log('танк поврежден');
      console.log(`танк переместился на ${parseInt(i) + 1}`);
    } else if (roadMines[i] === true && foundMine === true) {
      console.log(`танк переместился на ${parseInt(i) + 1}`);
      console.log('танк уничтожен');
      break;
    }
  }
}

// вызов функции
moveTank([false, false, false, false, false, false, false, false, false, false]);
// танк проедет по полю без мин
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default moveTank;
