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
    document.querySelector(".menu__items").classList.toggle("menu__items--active");
    document.querySelector("body").classList.toggle("lock");
  } else {
    document.querySelector(".menu__items").classList.remove("menu__items--active");
    document.querySelector("body").classList.remove("lock");
  }
});

//закрытие по нажатию кнопки esc
document.addEventListener("keyup", (evt) => {
  if (evt.key === "Escape") {
    document.querySelector(".menu__items").classList.remove("menu__items--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".close").classList.remove("close--active");
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

$(".reviews__items").slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
});

$(".certificates__items").slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const questions = document.querySelectorAll(".questions__name"); // это кнопка button на которую мы будем нажимать, и в которой написан наш вопрос

questions.forEach((question) => {
  question.addEventListener("click", (evt) => {
    // в запросе сразу после кнопки идет текст с ответом, отсюда и используется nextElementSibling (смотрит соседний элемент кнопки)
    question.nextElementSibling.classList.toggle("questions__text--active");
    question.classList.toggle("questions__name--active");

    if (question.nextElementSibling.classList.contains("questions__text--active")) {
      question.nextElementSibling.style.maxHeight = question.nextElementSibling.scrollHeight + "px";
    } else {
      question.nextElementSibling.style.maxHeight = null;
    }
  });
});
