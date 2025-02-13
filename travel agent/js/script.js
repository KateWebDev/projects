"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
    } else if (evt.target.closest(".easepick-wrapper")) {
      console.log(evt.target);

      // document.querySelector("body").classList.add("lock");
    }
  });

  document.addEventListener("keyup", (evt) => {
    if (evt.key === "Escape") {
      document.querySelector(".menu").classList.remove("menu--active");
      document.querySelector("body").classList.remove("lock");
      document.querySelector(".header__burger").classList.remove("header__burger--active");
    }
  });

  function showRaiting(className, widthStars) {
    $(`${className}`).rateYo({
      numStars: 5,
      starWidth: `${widthStars}px`,
      normalFill: "#c4c4c4",
      ratedFill: "#ffd336",
      readOnly: true,
      spacing: "4px",
      fullStar: true,
    });
  }

  if (document.querySelector(".reviews__raiting")) {
    if (window.innerWidth <= 768) {
      showRaiting(".reviews__raiting", 21);
    } else {
      showRaiting(".reviews__raiting", 18);
    }
  }

  const linksTeam = document.querySelectorAll(".reviews__item");
  function showBlocks(className) {
    if (window.innerWidth < 576) {
      className.forEach((link) => {
        link.classList.remove("hidden");
      });
      for (let i = 0; i < className.length; i++) {
        if (i >= 5) {
          className[i].classList.add("hidden");
        }
      }
    } else {
      className.forEach((link) => {
        link.classList.remove("hidden");
      });
      for (let i = 0; i < className.length; i++) {
        if (i >= 9) {
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

  if (document.querySelector(".destinations__slider")) {
    const swiperDestinations = new Swiper(".destinations__slider", {
      navigation: {
        prevEl: ".destinations__button.destinations__button--prev",
        nextEl: ".destinations__button.destinations__button--next",
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slidesPerView: "auto",
      slidesPerGroup: 1,

      breakpoints: {
        320: { spaceBetween: 15 },
        768: { spaceBetween: 32 },
      },
    });
  }

  const picker = new easepick.create({
    element: document.querySelector(".calendar"),
    css: [
      "https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css",
      "https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css",
    ],
    plugins: ["TimePlugin"],
    TimePlugin: {
      format: "HH:mm",
    },
    zIndex: 2,
  });
});
