"use strict";

var array = [1, 2, 3, 4, 5];
document.getElementById('change').addEventListener('click', function () {
  var index = Math.floor(Math.random() * array.length);
  var newValue = Math.floor(Math.random() * 100);
  array[index] = newValue;
  console.log(array);
});
document.getElementById('clear').addEventListener('click', function () {
  array = [];
  console.log(array);
});
document.getElementById('remove').addEventListener('click', function () {
  if (array.length > 0) {
    var index = Math.floor(Math.random() * array.length);
    array.splice(index, 1);
    console.log(array);
  }
});
document.getElementById('sum').addEventListener('click', function () {
  var sum = array.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log('Сумма элементов: ' + sum);
});
document.getElementById('add').addEventListener('click', function () {
  var newValue = document.getElementById('newElement').value;

  if (newValue) {
    array.push(Number(newValue));
    console.log(array);
  }
});
document.getElementById('filter').addEventListener('click', function () {
  var value = Number(document.getElementById('newElement').value);

  if (value) {
    var greaterArray = array.filter(function (item) {
      return item > value;
    });
    var lesserArray = array.filter(function (item) {
      return item < value;
    });
    console.log('Массив с числами больше ' + value + ': ' + greaterArray);
    console.log('Массив с числами меньше ' + value + ': ' + lesserArray);
  }
});
document.getElementById('sortAsc').addEventListener('click', function () {
  array.sort(function (a, b) {
    return a - b;
  });
  console.log('Массив, отсортированный по возрастанию: ' + array);
});
document.getElementById('sortDesc').addEventListener('click', function () {
  array.sort(function (a, b) {
    return b - a;
  });
  console.log('Массив, отсортированный по убыванию: ' + array);
});
document.getElementById('print').addEventListener('click', function () {
  console.log('Текущий массив: ' + array);
});