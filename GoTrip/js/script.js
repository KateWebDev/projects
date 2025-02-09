"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // fixed header
  const header = document.querySelector(".header");
  let heightHeader = header.offsetHeight;
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > heightHeader) {
      header.classList.add("header--fixed");
    } else {
      header.classList.remove("header--fixed");
    }
  });
  // menu
  document.addEventListener("click", (evt) => {
    if (evt.target.closest(".header__burger")) {
      document.querySelector(".menu").classList.toggle("menu--active");
      document.querySelector("body").classList.toggle("lock");
      document.querySelector(".header__burger").classList.toggle("header__burger--active");
    } else if (!evt.target.closest(".arrow")) {
      document.querySelector(".menu").classList.remove("menu--active");
      document.querySelector("body").classList.remove("lock");
      document.querySelector(".header__burger").classList.remove("header__burger--active");
    } else if (evt.target.closest(".menu__link")) {
      let links = document.querySelectorAll(".menu__link");
      links.forEach((link) => {
        link.classList.remove("menu__link--active");
      });
      evt.target.classList.add("menu__link--active");
      document.querySelector(".header__burger").classList.remove("header__burger--active");
    } else if (evt.target.closest(".up") || evt.target.closest(".logo__img")) {
      let links = document.querySelectorAll(".menu__link");
      links.forEach((link) => {
        link.classList.remove("menu__link--active");
      });
      document.querySelectorAll(".menu__link")[0].classList.add("menu__link--active");
    } else if (evt.target.closest(".header__btn")) {
      evt.preventDefault();
      document.querySelector("body").classList.toggle("lock");
      document.querySelector(".modal").classList.toggle("modal--active");
    } else if (evt.target.closest(".modal__close")) {
      document.querySelector("body").classList.remove("lock");
      document.querySelector(".modal").classList.remove("modal--active");
    }
  });
  // close ESC
  document.addEventListener("keyup", (evt) => {
    if (evt.key === "Escape") {
      document.querySelector(".menu").classList.remove("menu--active");
      cument.querySelector("body").classList.remove("lock");
      document.querySelector(".header__burger").classList.remove("header__burger--active");
    }
  });
  // raiting
  function showRaiting(className, widthStars) {
    $(`${className}`).rateYo({
      numStars: 5,
      starWidth: `${widthStars}px`,
      normalFill: "#c4c4c4",
      ratedFill: "#ffd336",
      readOnly: true,
      spacing: "10px",
      fullStar: true,
    });
  }
  if (document.querySelector(".about__raiting")) {
    if (window.innerWidth <= 768) {
      showRaiting(".about__raiting", 30);
    } else {
      showRaiting(".about__raiting", 50);
    }
  }
  // swiper
  if (document.querySelector(".destination__slider")) {
    const swiperDestination = new Swiper(".destination__slider", {
      navigation: {
        prevEl: ".destination__button.destination__button--prev",
        nextEl: ".destination__button.destination__button--next",
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slidesPerGroup: 1,
      breakpoints: {
        100: {
          slidesPerView: 1,
          spaceBetween: 10,
          initialSlide: 0,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 10,
          initialSlide: 0,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 30,
          initialSlide: 1,
          centeredSlides: true,
          centeredSlidesBounds: true,
        },
      },
    });
  }
});
