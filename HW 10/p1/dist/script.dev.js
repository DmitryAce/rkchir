"use strict";

// Генерация случайной буквенной капчи
function generateTextCaptcha() {
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var captcha = '';

  for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * alphabet.length);
    captcha += alphabet[randomIndex];
  }

  return captcha;
} // Генерация капчи с числами и проверка суммы


function generateNumberCaptcha() {
  var num1 = Math.floor(Math.random() * 10);
  var num2 = Math.floor(Math.random() * 10);
  var correctSum = num1 + num2;
  return {
    captchaText: "".concat(num1, " + ").concat(num2),
    correctSum: correctSum
  };
} // Проверка на пустой ввод


function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

var captchaTextElement = document.getElementById('captcha-text');
var userInputElement = document.getElementById('user-input');
var submitButton = document.getElementById('submit-button');
var errorMessage = document.getElementById('error-message');
var currentCaptcha;
var useNumbers = false; // Флаг для выбора типа капчи (false - буквенная, true - числовая)

function updateCaptcha() {
  useNumbers = Math.random() < 0.5; // Случайно выбираем тип капчи

  if (useNumbers) {
    currentCaptcha = generateNumberCaptcha();
    captchaTextElement.textContent = "\u0420\u0435\u0448\u0438\u0442\u0435 \u043F\u0440\u0438\u043C\u0435\u0440: ".concat(currentCaptcha.captchaText);
  } else {
    currentCaptcha = generateTextCaptcha();
    captchaTextElement.textContent = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442: ".concat(currentCaptcha);
  }

  userInputElement.value = '';
  submitButton.disabled = true;
  errorMessage.textContent = '';
}

updateCaptcha();
userInputElement.addEventListener('input', function () {
  if (useNumbers) {
    var userSum = parseInt(userInputElement.value, 10);

    if (!isNaN(userSum) && userSum === currentCaptcha.correctSum) {
      submitButton.disabled = false;
      errorMessage.textContent = '';
    } else {
      submitButton.disabled = true;
      errorMessage.textContent = 'Неверная сумма!';
    }
  } else {
    var userText = userInputElement.value;

    if (userText === currentCaptcha) {
      submitButton.disabled = false;
      errorMessage.textContent = '';
    } else {
      submitButton.disabled = true;
      errorMessage.textContent = 'Неверный текст!';
    }
  }
});
submitButton.addEventListener('click', function () {
  alert('Форма отправлена!');
  updateCaptcha();
});