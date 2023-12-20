"use strict";

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    var userInput = prompt('Введите число:', '');
    var number = parseFloat(userInput);

    if (!isNaN(number)) {
      this.value += number;
      alert('Число успешно добавлено в корзину.');
      updateBasketValue();
    } else {
      alert('Вы ввели некорректное число. Попробуйте снова.');
    }
  };
}

function updateBasketValue() {
  var basketValueElement = document.getElementById('basket-value');
  basketValueElement.textContent = myBasket.value;
}

var myBasket = new Accumulator(0);
var addToBasketButton = document.getElementById('add-to-basket');
addToBasketButton.addEventListener('click', function () {
  myBasket.read();
});
updateBasketValue();