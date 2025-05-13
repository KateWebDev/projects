const header = document.querySelector(".header");
let heightHeader = header.offsetHeight;
document.addEventListener("scroll", () => {
  if (window.pageYOffset > heightHeader) {
    header.classList.add("header--fixed");
  } else {
    header.classList.remove("header--fixed");
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
});

$(".intro__items").slick({
  arrows: true,
  dots: false,
  prevArrow: ".intro__slick-btn--prev",
  nextArrow: ".intro__slick-btn--next",
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

$(".info__items").slick({
  arrows: true,
  dots: false,
  prevArrow: ".info__slick-btn--prev",
  nextArrow: ".info__slick-btn--next",
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 123,
      settings: {
        arrows: false,
      },
    },
  ],
});

const questions = document.querySelectorAll(".accardeon__button");
questions.forEach((question) => {
  question.addEventListener("click", (evt) => {
    question.nextElementSibling.classList.toggle("accardeon__text--active");
    question.classList.toggle("accardeon__button--active");
    if (question.nextElementSibling.classList.contains("accardeon__text--active")) {
      question.nextElementSibling.style.maxHeight = question.nextElementSibling.scrollHeight + "px";
    } else {
      question.nextElementSibling.style.maxHeight = null;
    }
  });
});
