"use strict";

var menuSwitcherButton = document.querySelector('.menu-switcher');
var navigation = document.querySelector('.header__navigation');
menuSwitcherButton.addEventListener('click', function (e) {
  navigation.classList.toggle('header__navigation_opened');
  menuSwitcherButton.classList.toggle('menu-switcher_opened');
});
navigation.querySelectorAll('.navigation__link').forEach(function (link) {
  link.addEventListener('click', function (e) {
    navigation.classList.toggle('header__navigation_opened');
    menuSwitcherButton.classList.toggle('menu-switcher_opened');
  });
});