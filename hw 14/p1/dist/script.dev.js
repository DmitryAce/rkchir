"use strict";

// Функция для добавления динамического содержимого с помощью innerHTML
function loadDynamicContent() {
  var dynamicContent = "\n        <p>\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0441 <a href=\"https://www.example.com\">\u0441\u0441\u044B\u043B\u043A\u043E\u0439</a> \u0438 \u0438\u043A\u043E\u043D\u043A\u043E\u0439 <a href=\"https://www.example.com\"><i>\u2192</i> \u0421\u0441\u044B\u043B\u043A\u0430 \u0441 \u0438\u043A\u043E\u043D\u043A\u043E\u0439</a></p>\n    ";
  document.getElementById('contents').innerHTML = dynamicContent;
} // Добавляем обработчик события для клика по кнопке или другому событию,
// который будет вызывать загрузку динамического содержимого


document.addEventListener('DOMContentLoaded', function () {
  // Вызываем функцию загрузки динамического содержимого
  loadDynamicContent();
}); // Добавляем обработчик события на клик внутри #contents для ссылок

document.getElementById('contents').addEventListener('click', function (event) {
  var targetElement = event.target;

  while (targetElement && targetElement !== this) {
    if (targetElement.tagName === 'A') {
      var confirmation = confirm('Вы уверены, что хотите покинуть страницу?');

      if (!confirmation) {
        event.preventDefault();
      }

      return;
    }

    targetElement = targetElement.parentNode;
  }
});