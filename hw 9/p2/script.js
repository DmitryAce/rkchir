document.getElementById("loginButton").addEventListener("click", function () {
    var username = prompt("Введите ваш логин:");

    if (username === "Админ") {
        var password = prompt("Введите пароль:");

        if (password === "Я главный") {
            alert("Здравствуйте!");
        } else if (password === null || password === "") {
            alert("Отменено");
        } else {
            alert("Неверный пароль");
        }
    } else if (username === null || username === "") {
        alert("Отменено");
    } else {
        alert("Я вас не знаю");
    }
});
