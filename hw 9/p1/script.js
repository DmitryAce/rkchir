function checkRegistration(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    var registrationInput = document.getElementById("registration");
    var response = document.getElementById("response");

    if (registrationInput.value.toLowerCase() === "да") {
        response.innerHTML = "Круто!";
    } else {
        response.innerHTML = "Попробуй ещё раз";
    }
}

// Находим форму и присваиваем функцию checkRegistration обработчиком события
var form = document.querySelector("form");
form.addEventListener("submit", checkRegistration);
