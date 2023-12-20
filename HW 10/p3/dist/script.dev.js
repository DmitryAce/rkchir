"use strict";

function truncateText() {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    var textElement = card.querySelector('.text');
    var maxLength = 22; // Максимальная длина текста

    if (textElement.textContent.length > maxLength) {
      textElement.textContent = textElement.textContent.slice(0, maxLength) + '…';
    }
  });
}

truncateText();