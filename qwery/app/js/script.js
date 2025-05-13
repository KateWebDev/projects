const header = document.querySelector(".header");
let heightHeader = header.offsetHeight;
document.addEventListener("scroll", () => {
  if (window.pageYOffset > heightHeader) {
    header.classList.add("header--fixed");
    up.classList.add("up--active");
  } else {
    header.classList.remove("header--fixed");
    up.classList.remove("up--active");
  }
});

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

const btnSearch = document.querySelector(".search__button");
const inputSearch = document.querySelector(".search__input");

if (btnSearch) {
  btnSearch.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (inputSearch) {
      inputSearch.classList.toggle("search__input--active");
    }
  });
}

if (document.querySelector(".gallery__slider")) {
  const swiperGallery = new Swiper(".gallery__slider", {
    navigation: {
      prevEl: ".gallery .gallery__button.gallery__button--prev",
      nextEl: ".gallery .gallery__button.gallery__button--next",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
}
