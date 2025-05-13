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

// Валидация формы через плагин jquery.validate
function validateForm(nameForm) {
  $(nameForm).validate({
    rules: {
      name: {
        required: true,
      },
      tel: {
        required: true,
      },
      mail: {
        required: true,
        email: true,
      },
      message: {
        required: true,
      },
      check: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Введите Ваше имя",
      },
      tel: {
        required: "Введите Ваш телефон",
      },
      mail: {
        required: "Введите Вашу почту",
        email: "Не корректно введен электронный адрес почты",
      },
      message: {
        required: "Введите текст Вашего комментария",
      },
      check: {
        required: "Заполните согласие на обработку персональных данных",
      },
    },
  });
}

validateForm(".form");

//Видео magnificPopup
$(".info__btn").magnificPopup({
  disableOn: 700,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
});

$(".photo__items").slick({
  dots: false,
  arrows: true,
  fade: true,
  prevArrow: ".photo__button--prev",
  nextArrow: ".photo__button--next",
});

//Галлерея magnificPopup
$(".photo__item").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1],
  },
});
