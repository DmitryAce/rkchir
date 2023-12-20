"use strict";

// Получаем контейнер с уведомлениями
var notificationsContainer = document.querySelector('.notifications-container'); // Добавляем обработчик клика на контейнере для делегирования событий

notificationsContainer.addEventListener('click', function (event) {
  // Проверяем, было ли нажатие на кнопку закрытия
  if (event.target.classList.contains('close-button')) {
    // Получаем родительский элемент уведомления
    var notification = event.target.closest(".notification"); // Удаляем уведомление из DOM

    notification.remove();
  }
});