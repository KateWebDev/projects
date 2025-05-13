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

$(".dop__rateyo, .testimonials__rateyo").rateYo({
  starWidth: "22px",
  normalFill: "#ccccce",
  ratedFill: "#b48d62",
  readOnly: true,
  spacing: "9px",
  fullStar: true,
});

const swiperSellers = new Swiper(".sellers__slider", {
  navigation: {
    prevEl: ".sellers__button--prev",
    nextEl: ".sellers__button--next",
  },
  spaceBetween: 14,
  slidesPerGroup: 1,
  breakpoints: {
    319: { slidesPerView: 1.3 },
    468: { slidesPerView: 2.3 },
    768: {
      slidesPerView: 3,
    },
  },
});

const swiperTestimonials = new Swiper(".testimonials__slider", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: ".testimonials__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
});
