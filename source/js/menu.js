const toggle = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav");
const siteList = document.querySelector(".site-list");

mainNav.classList.remove("main-nav_nojs");

const openClose = function () {
  siteList.classList.toggle("site-list_opened");
};

toggle.addEventListener("click", openClose);
