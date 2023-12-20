const menuSwitcherButton = document.querySelector('.menu-switcher');
const navigation = document.querySelector('.header__navigation');
menuSwitcherButton.addEventListener('click', (e) => {
    navigation.classList.toggle('header__navigation_opened');
    menuSwitcherButton.classList.toggle('menu-switcher_opened');
});

navigation.querySelectorAll('.navigation__link').forEach(link => {
    link.addEventListener('click', e => {
        navigation.classList.toggle('header__navigation_opened');
        menuSwitcherButton.classList.toggle('menu-switcher_opened');
    })
})