"use strict";

document.addEventListener("DOMContentLoaded", () => {
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

  function showRaiting(className, widthStars) {
    $(`${className}`).rateYo({
      numStars: 5,
      starWidth: `${widthStars}px`,
      normalFill: "#c4c4c4",
      ratedFill: "#ffc54f",
      readOnly: true,
      spacing: "5px",
      fullStar: true,
    });
  }

  if (document.querySelector(".testimonials__raiting")) {
    if (window.innerWidth <= 768) {
      showRaiting(".testimonials__raiting", 14);
    } else {
      showRaiting(".testimonials__raiting", 20);
    }
  }

  // slider swiper
  if (document.querySelector(".testimonials__slider")) {
    const swiper = new Swiper(".testimonials__slider", {
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slidesPerGroup: 1,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
      },
    });
  }
});
