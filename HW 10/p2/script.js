function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    const userInput = prompt('Введите число:', '');
    const number = parseFloat(userInput);

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
  const basketValueElement = document.getElementById('basket-value');
  basketValueElement.textContent = myBasket.value;
}

const myBasket = new Accumulator(0);

const addToBasketButton = document.getElementById('add-to-basket');
addToBasketButton.addEventListener('click', function() {
  myBasket.read();
});

updateBasketValue();
