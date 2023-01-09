const toggle = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav__wrapper");

const openClose = function () {
  mainNav.classList.toggle("visually-hidden");
};

toggle.addEventListener("click", openClose);
