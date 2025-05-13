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

document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu").classList.toggle("menu--active");
    document.querySelector("body").classList.toggle("lock");
  } else {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
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

$(".dop__points").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  nextArrow:
    '<button class="dop__arrow dop__arrow--right"><img src="images/main/dop/arrowRight.svg" alt="кнопка назад"></button>',
  prevArrow:
    '<button class="dop__arrow dop__arrow--left"><img src="images/main/dop/arrowLeft.svg" alt="кнопка вперед"></button>',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: false,
      },
    },
  ],
});
