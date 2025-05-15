"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // header fixed
  const header = document.querySelector(".header");
  const up = document.querySelector(".up");
  const heightHeader = header.offsetHeight;
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > heightHeader) {
      if (header) {
        header.classList.add("header--fixed");
      }
      if (up) {
        up.classList.add("up--active");
      }
    } else {
      if (header) {
        header.classList.remove("header--fixed");
      }
      if (up) {
        up.classList.remove("up--active");
      }
    }
  });
  //Бургер
  document.addEventListener("click", (evt) => {
    if (evt.target.closest(".header__burger")) {
      if (document.querySelector(".menu")) {
        document.querySelector(".menu").classList.toggle("menu--active");
      }
      if (document.querySelector("body")) {
        document.querySelector("body").classList.toggle("lock");
      }
      if (document.querySelector(".header__burger")) {
        document.querySelector(".header__burger").classList.toggle("header__burger--active");
      }
    } else if (!evt.target.closest(".arrow")) {
      if (document.querySelector(".menu")) {
        document.querySelector(".menu").classList.remove("menu--active");
      }
      if (document.querySelector(".submenu__items")) {
        document.querySelector(".submenu__items").classList.remove("submenu__items--active");
        document.querySelector(".submenu__items").classList.remove("submenu__items--open");
      }
      if (document.querySelector("body")) {
        document.querySelector("body").classList.remove("lock");
      }
      if (document.querySelector(".header__burger")) {
        document.querySelector(".header__burger").classList.remove("header__burger--active");
      }
    } else if (evt.target.closest(".menu__link")) {
      let links = document.querySelectorAll(".menu__link");
      links.forEach((link) => {
        link.classList.remove("menu__link--active");
      });
      evt.target.classList.add("menu__link--active");
      if (document.querySelector(".header__burger")) {
        document.querySelector(".header__burger").classList.remove("header__burger--active");
      }
    } else if (evt.target.closest(".submenu__link")) {
      if (document.querySelector(".header__burger")) {
        document.querySelector(".header__burger").classList.remove("header__burger--active");
      }
    } else if (evt.target.closest(".up") || evt.target.closest(".logo__img")) {
      let links = document.querySelectorAll(".menu__link");
      links.forEach((link) => {
        link.classList.remove("menu__link--active");
      });
      if (document.querySelectorAll(".menu__link").length > 0) {
        document.querySelectorAll(".menu__link")[0].classList.add("menu__link--active");
      }
    } else if (evt.target.closest(".header__btn")) {
      evt.preventDefault();
      if (document.querySelector("body")) {
        document.querySelector("body").classList.toggle("lock");
      }
      if (document.querySelector(".modal")) {
        document.querySelector(".modal").classList.toggle("modal--active");
      }
    } else if (evt.target.closest(".modal__close")) {
      if (document.querySelector("body")) {
        document.querySelector("body").classList.remove("lock");
      }
      if (document.querySelector(".modal")) {
        document.querySelector(".modal").classList.remove("modal--active");
      }
    }
  });
  //закрытие по нажатию кнопки esc
  document.addEventListener("keyup", (evt) => {
    if (evt.key === "Escape") {
      if (document.querySelector(".menu")) {
        document.querySelector(".menu").classList.remove("menu--active");
      } else if (document.querySelector(".submenu__items")) {
        document.querySelector(".submenu__items").classList.remove("submenu__items--active");
        document.querySelector(".submenu__items").classList.remove("submenu__items--open");
      } else if (document.querySelector(".body")) {
        document.querySelector("body").classList.remove("lock");
      } else if (document.querySelector(".close")) {
        document.querySelector(".close").classList.remove("close--active");
      } else if (document.querySelector(".header__burger")) {
        document.querySelector(".header__burger").classList.remove("header__burger--active");
      }
    }
  });
  // swiper
  if (document.querySelector(".review__slider")) {
    const swiper = new Swiper(".review__slider", {
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },

      spaceBetween: 20,

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          initialSlide: 0,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
        557: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          initialSlide: 0,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          initialSlide: 0,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 2,
          initialSlide: 2,
          centeredSlides: true,
          centeredSlidesBounds: true,
        },
      },
    });
  }
});
