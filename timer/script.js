document.addEventListener('DOMContentLoaded', function () {
  let number = document.getElementById('number');
  let start = document.getElementById('start');
  let count = document.getElementById('count');
  let intervID;

  function changeNumber() {
    count.textContent = number.value;
    if (!intervID) {
      intervID = setInterval(countNumbers, 1000);
    } else {
      clearInterval(intervID);
      intervID = null;
    }
  }

  function countNumbers() {
    if (count.textContent > 0) {
      count.textContent--;
    } else {
      clearInterval(intervID);
      intervID = null;
    }
  }

  start.addEventListener('click', changeNumber);
});
