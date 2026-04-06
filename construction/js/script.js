"use strict";

document.addEventListener("DOMContentLoaded", () => {
  //Бургер
  document.addEventListener("click", (evt) => {
    if (evt.target.closest(".mobile-header__burger")) {
      if (document.querySelector(".mobile-header__menu")) {
        document.querySelector(".mobile-header__menu").classList.toggle("menu--active");
      }
      if (document.querySelector("body")) {
        document.querySelector("body").classList.toggle("lock");
      }
      if (document.querySelector(".mobile-header__burger")) {
        document.querySelector(".mobile-header__burger").classList.toggle("mobile-header__burger--active");
      }
    } else if (!evt.target.closest(".arrow")) {
      if (document.querySelector(".mobile-header__menu")) {
        document.querySelector(".mobile-header__menu").classList.remove("menu--active");
      }
      if (document.querySelector(".submobile-header__menu__items")) {
        document
          .querySelector(".submobile-header__menu__items")
          .classList.remove("submobile-header__menu__items--active");
        document
          .querySelector(".submobile-header__menu__items")
          .classList.remove("submobile-header__menu__items--open");
      }
      if (document.querySelector("body")) {
        document.querySelector("body").classList.remove("lock");
      }
      if (document.querySelector(".mobile-header__burger")) {
        document.querySelector(".mobile-header__burger").classList.remove("mobile-header__burger--active");
      }
    } else if (evt.target.closest(".mobile-header__menu__link")) {
      let links = document.querySelectorAll(".mobile-header__menu__link");
      links.forEach((link) => {
        link.classList.remove("mobile-header__menu__link--active");
      });
      evt.target.classList.add("mobile-header__menu__link--active");
      if (document.querySelector(".mobile-header__burger")) {
        document.querySelector(".mobile-header__burger").classList.remove("mobile-header__burger--active");
      }
    } else if (evt.target.closest(".submobile-header__menu__link")) {
      if (document.querySelector(".mobile-header__burger")) {
        document.querySelector(".mobile-header__burger").classList.remove("mobile-header__burger--active");
      }
    } else if (evt.target.closest(".up") || evt.target.closest(".logo__img")) {
      let links = document.querySelectorAll(".mobile-header__menu__link");
      links.forEach((link) => {
        link.classList.remove("mobile-header__menu__link--active");
      });
      if (document.querySelectorAll(".mobile-header__menu__link").length > 0) {
        document.querySelectorAll(".mobile-header__menu__link")[0].classList.add("mobile-header__menu__link--active");
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
      if (document.querySelector(".mobile-header__menu")) {
        document.querySelector(".mobile-header__menu").classList.remove("menu--active");
      } else if (document.querySelector(".submobile-header__menu__items")) {
        document
          .querySelector(".submobile-header__menu__items")
          .classList.remove("submobile-header__menu__items--active");
        document
          .querySelector(".submobile-header__menu__items")
          .classList.remove("submobile-header__menu__items--open");
      } else if (document.querySelector(".body")) {
        document.querySelector("body").classList.remove("lock");
      } else if (document.querySelector(".close")) {
        document.querySelector(".close").classList.remove("close--active");
      } else if (document.querySelector(".mobile-header__burger")) {
        document.querySelector(".mobile-header__burger").classList.remove("mobile-header__burger--active");
      }
    }
  });

  const linksTeam = document.querySelectorAll(".gallery__item");
  function showBlocks(className) {
    if (window.innerWidth < 360) {
      className.forEach((link) => {
        link.classList.remove("hidden");
      });
      for (let i = 0; i < className.length; i++) {
        if (i >= 3) {
          className[i].classList.add("hidden");
        }
      }
    } else {
      className.forEach((link) => {
        link.classList.remove("hidden");
      });
      for (let i = 0; i < className.length; i++) {
        if (i >= 6) {
          className[i].classList.add("hidden");
        }
      }
    }
  }
  showBlocks(linksTeam);
  if (linksTeam.length > 0) {
    window.addEventListener("resize", function () {
      showBlocks(linksTeam);
    });
  }

  if (document.querySelector(".intro__slider")) {
    const swiper = new Swiper(".intro__slider", {
      navigation: {
        prevEl: ".intro #slider-button-prev",
        nextEl: ".intro #slider-button-next",
      },
      // пагинация (буллеты)
      pagination: {
        el: ".intro .pagination",
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });
  }

  if (document.querySelector(".reviews__slider")) {
    const swiper = new Swiper(".reviews__slider", {
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      autoHeight: true,

      slidesPerGroup: 1,

      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 26,
          pagination: {
            el: ".reviews .pagination",
            clickable: true,
          },
        },
      },
    });
  }

  document.querySelectorAll("textarea").forEach((el) => {
    el.style.height = el.setAttribute("style", "height: " + el.scrollHeight + "px");
    el.classList.add("auto");
    el.addEventListener("input", (e) => {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    });
  });
});
