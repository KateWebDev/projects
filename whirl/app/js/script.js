document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu").classList.toggle("menu--active");
    document.querySelector("body").classList.toggle("lock");
    document.querySelector(".header__burger").classList.toggle("header__burger--active");
  } else if (!evt.target.closest(".arrow")) {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header__burger").classList.remove("header__burger--active");
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

const questions = document.querySelectorAll(".care__accardeon .accardeon__name");

if (questions.length > 0) {
  questions.forEach((question) => {
    question.nextElementSibling.style.maxHeight = 0;

    question.addEventListener("click", (evt) => {
      question.nextElementSibling.classList.toggle("accardeon__text--active");
      question.classList.toggle("accardeon__name--active");
      question.parentNode.classList.toggle("accardeon__item--active"); //если нужно что-то изменить в родителе accardeon__item (например цвет заливки)
      if (question.nextElementSibling.classList.contains("accardeon__text--active")) {
        question.nextElementSibling.style.maxHeight = question.nextElementSibling.scrollHeight + "px";
      } else {
        question.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
}
