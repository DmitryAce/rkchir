// Функция для добавления динамического содержимого с помощью innerHTML
function loadDynamicContent() {
    const dynamicContent = `
        <p>Некоторое динамическое содержимое с <a href="https://www.example.com">ссылкой</a> и иконкой <a href="https://www.example.com"><i>→</i> Ссылка с иконкой</a></p>
    `;
    document.getElementById('contents').innerHTML = dynamicContent;
}

// Добавляем обработчик события для клика по кнопке или другому событию,
// который будет вызывать загрузку динамического содержимого
document.addEventListener('DOMContentLoaded', function() {
    // Вызываем функцию загрузки динамического содержимого
    loadDynamicContent();
});

// Добавляем обработчик события на клик внутри #contents для ссылок
document.getElementById('contents').addEventListener('click', function(event) {
    let targetElement = event.target;

    while (targetElement && targetElement !== this) {
        if (targetElement.tagName === 'A') {
            const confirmation = confirm('Вы уверены, что хотите покинуть страницу?');
            if (!confirmation) {
                event.preventDefault();
            }
            return;
        }
        targetElement = targetElement.parentNode;
    }
});
