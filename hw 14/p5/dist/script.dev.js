"use strict";

var productsList = document.getElementById('products-list');
var cartList = document.getElementById('cart-list');
var totalPrice = document.getElementById('total-price');
var cartPrice = 0;
productsList.addEventListener('dragstart', function (event) {
  event.dataTransfer.setData('text/plain', event.target.dataset.price);
});
cartList.addEventListener('dragover', function (event) {
  event.preventDefault();
  cartList.classList.add('droppable-hover');
});
cartList.addEventListener('dragleave', function () {
  cartList.classList.remove('droppable-hover');
});
cartList.addEventListener('drop', function (event) {
  event.preventDefault();
  cartList.classList.remove('droppable-hover');
  var price = parseInt(event.dataTransfer.getData('text/plain'));
  cartPrice += price;
  totalPrice.textContent = "\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ".concat(cartPrice);
  var newItem = document.createElement('div');
  newItem.textContent = "\u0422\u043E\u0432\u0430\u0440 \u0437\u0430 ".concat(price);
  cartList.appendChild(newItem);
});