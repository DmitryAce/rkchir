// Функция для проверки, достигнут ли конец страницы
function isPageBottom() {
    const body = document.body;
    const html = document.documentElement;

    // Получаем высоту контента страницы и текущую прокрутку
    const windowHeight = window.innerHeight || html.clientHeight || body.clientHeight;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const scrollTop = window.pageYOffset || (html || body.parentNode || body).scrollTop;

    // Проверяем, достигнут ли конец страницы
    return docHeight - windowHeight - scrollTop <= 50; // Подстройка значения по вашему желанию
}

// Функция для загрузки нового контента
function fetchMoreContent() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block'; // Показываем индикатор загрузки

    // Эмулируем задержку загрузки данных (может быть заменено реальным запросом fetch или AJAX)
    setTimeout(function() {
        const content = document.querySelector('.content');

        // Создаем новый пост
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = '<p>Новый пост</p>'; // Замените это на ваш загружаемый контент

        // Добавляем новый пост в контейнер
        content.insertBefore(newPost, loader);

        loader.style.display = 'none'; // Скрываем индикатор загрузки после загрузки контента
    }, 2000); // Задержка загрузки в миллисекундах (замените на реальное время загрузки)
}

// Функция, которая будет вызываться при прокрутке страницы
function onScroll() {
    if (isPageBottom()) {
        fetchMoreContent();
    }
}

// Добавляем обработчик события прокрутки страницы
window.addEventListener('scroll', onScroll);
