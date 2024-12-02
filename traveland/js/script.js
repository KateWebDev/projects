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

if (document.querySelector(".offers__slider")) {
  const swiper = new Swiper(".offers__slider", {
    navigation: {
      prevEl: ".slider__button.slider__button--prev",
      nextEl: ".slider__button.slider__button--next",
    },

    pagination: {
      el: ".slider__pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    slidesPerGroup: 1,
    loop: true,
    loopedSlides: 3,

    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 0, centeredSlides: false, initialSlide: 0 },
      480: { slidesPerView: 2, spaceBetween: 30, centeredSlides: false, initialSlide: 0 },
      780: { slidesPerView: 3, spaceBetween: 40, centeredSlides: true, initialSlide: 1, centeredSlidesBounds: true },
      1160: { slidesPerView: 4, spaceBetween: 50, centeredSlides: true, initialSlide: 1, centeredSlidesBounds: true },
      1600: { slidesPerView: 5, spaceBetween: 73, centeredSlides: true, initialSlide: 2, centeredSlidesBounds: true },
    },
  });
}
