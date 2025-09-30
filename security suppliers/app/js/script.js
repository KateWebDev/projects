"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const heightHeader = header.offsetHeight;
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > heightHeader) {
      if (header) {
        header.classList.add("header--fixed");
      }
    } else {
      if (header) {
        header.classList.remove("header--fixed");
      }
    }
  });

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

  if (document.querySelector(".reviews__slider")) {
    const swiper = new Swiper(".reviews__slider", {
      navigation: {
        prevEl: ".slider__button.slider__button--prev",
        nextEl: ".slider__button.slider__button--next",
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      autoHeight: true,
      slidesPerGroup: 1,

      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
          initialSlide: 0,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
        575: {
          slidesPerView: 1.2,
          spaceBetween: 30,
          initialSlide: 0,
          centeredSlides: false,
          centeredSlidesBounds: false,
        },
        991: {
          slidesPerView: 1.4,
          spaceBetween: 48,
          initialSlide: 1,
          centeredSlides: true,
          centeredSlidesBounds: true,
        },
      },
    });
  }

  const progress = document.querySelector(".progress");
  const progressNumber = progress.querySelector(".progress__number").textContent.trim();
  if (progress && progressNumber) {
    progress.style = `--progress: ${progressNumber}%`;
    progress.querySelector("progress").setAttribute("value", progressNumber);
    progress.querySelector(".progress__number").textContent = `${progressNumber}%`;
  }
});
