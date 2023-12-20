// Генерация случайной буквенной капчи
function generateTextCaptcha() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      captcha += alphabet[randomIndex];
    }
    return captcha;
  }
  
// Генерация капчи с числами и проверка суммы
function generateNumberCaptcha() {
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
const correctSum = num1 + num2;
return {
    captchaText: `${num1} + ${num2}`,
    correctSum: correctSum,
};
}

// Проверка на пустой ввод
function isEmpty(obj) {
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
    return false;
    }
}
return true;
}

const captchaTextElement = document.getElementById('captcha-text');
const userInputElement = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.getElementById('error-message');

let currentCaptcha;
let useNumbers = false; // Флаг для выбора типа капчи (false - буквенная, true - числовая)

function updateCaptcha() {
    useNumbers = Math.random() < 0.5; // Случайно выбираем тип капчи
    if (useNumbers) {
      currentCaptcha = generateNumberCaptcha();
      captchaTextElement.textContent = `Решите пример: ${currentCaptcha.captchaText}`;
    } else {
      currentCaptcha = generateTextCaptcha();
      captchaTextElement.textContent = `Введите текст: ${currentCaptcha}`;
    }
  
    userInputElement.value = '';
    submitButton.disabled = true;
    errorMessage.textContent = '';
  }
  
updateCaptcha();

userInputElement.addEventListener('input', () => {
if (useNumbers) {
    const userSum = parseInt(userInputElement.value, 10);
    if (!isNaN(userSum) && userSum === currentCaptcha.correctSum) {
    submitButton.disabled = false;
    errorMessage.textContent = '';
    } else {
    submitButton.disabled = true;
    errorMessage.textContent = 'Неверная сумма!';
    }
} else {
    const userText = userInputElement.value;
    if (userText === currentCaptcha) {
    submitButton.disabled = false;
    errorMessage.textContent = '';
    } else {
    submitButton.disabled = true;
    errorMessage.textContent = 'Неверный текст!';
    }
}
});

submitButton.addEventListener('click', () => {
alert('Форма отправлена!');
updateCaptcha();
});
