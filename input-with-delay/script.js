document.addEventListener('DOMContentLoaded', function () {
  let input = document.getElementById('input');
  let title = document.getElementById('title');
  let timeoutID;

  function typeTitle() {
    timeoutID = setTimeout(typeLetter, 300);
  }

  function typeLetter() {
    if (input.onchange) {
      clearTimeout(timeoutID);
    } else {
      title.textContent = input.value;
    }
  }

  input.addEventListener('input', typeTitle);
});
