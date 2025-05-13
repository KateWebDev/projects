// фиксированная шапка
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

// бургер
document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu").classList.toggle("menu--active");
    document.querySelector("body").classList.toggle("lock");
    document.querySelector(".header__burger").classList.toggle("header__burger--active");
  } else {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header__burger").classList.toggle("header__burger--active");
  }
});

// слайдер
$(".reviews__items").slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
        dots: true,
      },
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
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

//попап
const popup = document.getElementById("popup-form1");
document.addEventListener("click", (evt) => {
  if (evt.target.closest(".btn")) {
    popup.classList.toggle("open");
    document.body.style.overflow = "hidden";
  }
});

const popup2 = document.getElementById("popup-form2");
document.addEventListener("click", (evt) => {
  if (evt.target.closest(".button")) {
    popup2.classList.toggle("open");
    //   document.body.style.overflow = "hidden";
  }
});

const body = document.querySelector("body");
body.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    popup.classList.remove("open");
    popup2.classList.remove("open");
  }
});
