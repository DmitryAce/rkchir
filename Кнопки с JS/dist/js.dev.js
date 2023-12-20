"use strict";

var target = document.querySelectorAll('.socList>li>a');
target.forEach(function (ele) {
  ele.addEventListener('mouseenter', function (event) {
    var color = event.target.getAttribute('data-color');
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
  });
});
target.forEach(function (ele) {
  ele.addEventListener('mouseleave', function (event) {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#fff';
  });
});
VanillaTilt.init(document.querySelectorAll(".socList li>a"), {
  max: 30,
  speed: 100,
  glare: true,
  "max-glare": 0.65
}); //popup setting

setTimeout(function () {
  document.getElementById('pop').classList.add('active');
}, 10000);
document.getElementById('closePop').addEventListener('click', function () {
  document.getElementById('pop').classList.remove('active');
});