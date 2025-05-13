//Фиксированная шапка
const header = document.querySelector(".header");
const intro = document.querySelector(".intro");
let heightHeader = header.offsetHeight;

document.addEventListener("scroll", () => {
  if (window.pageYOffset > heightHeader) {
    header.classList.add("header--fixed");
  } else {
    header.classList.remove("header--fixed");
  }
});

//Бургер
document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu__items").classList.add("menu__items--active");
    document.querySelector("body").classList.add("lock");
    document.querySelector(".close").classList.add("close--active");
    document.querySelector(".wrapper").classList.add("wrapper--active");
  } else if (evt.target.closest(".close.close--active")) {
    document.querySelector(".menu__items").classList.remove("menu__items--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".close").classList.remove("close--active");
    document.querySelector(".wrapper").classList.remove("wrapper--active");
  } else if (
    evt.target.closest(".menu__link") ||
    evt.target.closest(".dop-menu__link") ||
    evt.target.closest(".dop-menu__btn")
  ) {
    document.querySelector(".menu__items").classList.remove("menu__items--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".close").classList.remove("close--active");
    document.querySelector(".wrapper").classList.remove("wrapper--active");
  }
});

// Закрытие меню клавишей escape
document.addEventListener("keyup", (evt) => {
  if (evt.key === "Escape") {
    document.querySelector(".menu__items").classList.remove("menu__items--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".close").classList.remove("close--active");
    document.querySelector(".wrapper").classList.remove("wrapper--active");
  }
});

// Пункты меню
document.addEventListener("click", (evt) => {
  if (evt.target.closest(".menu__link")) {
    let links = document.querySelectorAll(".menu__link");
    links.forEach((link) => {
      link.classList.remove("menu__link--active");
    });
    evt.target.classList.add("menu__link--active");
  }

  if (evt.target.closest(".up") || evt.target.closest(".logo__img")) {
    let links = document.querySelectorAll(".menu__link");
    links.forEach((link) => {
      link.classList.remove("menu__link--active");
    });
    document.querySelectorAll(".menu__link")[0].classList.add("menu__link--active");
  }
});
