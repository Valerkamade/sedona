const toggle = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav__wrapper");

const openClose = function () {
  mainNav.classList.toggle("visually-hidden");
};

toggle.addEventListener("click", openClose);

initialCards.forEach(function (item) {
  const galleryElement = galleryTemplate.querySelector('.elements__element').cloneNode(true);
  galleryElement.querySelector('.elements__title').textContent = item.name;
  galleryElement.querySelector('.elements__img').src = item.link;
  const buttonLike = galleryElement.querySelector('.elements__button-like');
  buttonLike.addEventListener('click', function (event) {
  const eventTarget = event.target;
  eventTarget.classList.toggle('elements__button-like_active');
  })
  sectionElements.append(galleryElement);
  });

  // а так нет
  initialCards.forEach(function (item) {
  const galleryElement = galleryTemplate.querySelector('.elements__element').cloneNode(true);
  galleryElement.querySelector('.elements__title').textContent = item.name;
  galleryElement.querySelector('.elements__img').src = item.link;
  sectionElements.append(galleryElement);
  });

  const galleryEl = galleryTemplate.querySelector('.elements__element')
  const buttonLike = galleryEl.querySelector('.elements__button-like');
  buttonLike.addEventListener('click', function (event) {
  const eventTarget = event.target;
  eventTarget.classList.toggle('elements__button-like_active');
  })
