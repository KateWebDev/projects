document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu").classList.toggle("menu--active");
    document.querySelector("body").classList.toggle("lock");
    document.querySelector(".header__burger").classList.toggle("header__burger--active");
  } else if (!evt.target.closest(".arrow")) {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header__burger").classList.remove("header__burger--avtive");
  }
});

document.addEventListener("keyup", (evt) => {
  if (evt.key === "Escape") {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header__burger").classList.remove("header__burger--active");
    document.querySelector(".modal").classList.remove("modal--active");
  }
});

document.addEventListener("click", (evt) => {
  if (evt.target.closest(".menu__link")) {
    let links = document.querySelectorAll(".menu__link");
    links.forEach((link) => {
      link.classList.remove("menu__link--active");
    });
    evt.target.classList.add("menu__link--active");
    document.querySelector(".header__burger").classList.remove("header__burger--active");
  }
  if (evt.target.closest(".up") || evt.target.closest(".logo__img")) {
    let links = document.querySelectorAll(".menu__link");
    links.forEach((link) => {
      link.classList.remove("menu__link--active");
    });
    document.querySelectorAll(".menu__link")[0].classList.add("menu__link--active");
  }
  if (evt.target.closest(".header__btn")) {
    evt.preventDefault();
    document.querySelector("body").classList.toggle("lock");
    document.querySelector(".modal").classList.toggle("modal--active");
  }
  if (evt.target.closest(".modal__close")) {
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".modal").classList.remove("modal--active");
  }
});

const swiper = new Swiper(".works__slider", {
  navigation: {
    prevEl: ".intro__button.intro__button--prev",
    nextEl: ".intro__button.intro__button--next",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  spaceBetween: 20,

  breakpoints: {
    320: { slidesPerView: 1, slidesPerGroup: 1 },
    480: { slidesPerView: 2, slidesPerGroup: 2 },
    680: { slidesPerView: 3, slidesPerGroup: 3 },
  },
});
