"use strict";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".container-full")) {
    if (document.querySelector(".header")) {
      document.querySelector(".container-full").style.minHeight = `calc(100svh - ${
        document.querySelector(".header").clientHeight
      }px)`;

      window.addEventListener("resize", () => {
        document.querySelector(".container-full").style.minHeight = `calc(100svh - ${
          document.querySelector(".header").clientHeight
        }px)`;
      });
    }
  }
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

  if (document.querySelector(".reviews__slider")) {
    new Swiper(".reviews__slider", {
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      autoHeight: true,

      slidesPerGroup: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      initialSlide: 1,
      loop: true,

      breakpoints: {
        320: { slidesPerView: 1 },
        480: { slidesPerView: 1.2, spaceBetween: 30 },
        768: { spaceBetween: 50 },
        1024: { slidesPerView: 1.3, spaceBetween: 80 },
      },
    });
  }
});
