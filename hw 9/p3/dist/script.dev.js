"use strict";

var likeButton = document.getElementById("likeButton");
likeButton.addEventListener("click", function () {
  likeButton.classList.toggle("active");
});