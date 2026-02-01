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

  // Переключение темы
  switch (localStorage.getItem("theme")) {
    case "dark-theme":
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      break;
    default:
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      break;
  }

  const themes = document.querySelectorAll(".theme input");
  if (themes.length > 0) {
    themes.forEach((theme) => {
      theme.addEventListener("change", () => {
        switch (document.body.classList.contains("light-theme")) {
          case true:
            localStorage.setItem("theme", "dark-theme");
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            break;
          case false:
            localStorage.removeItem("theme");
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            break;
        }
      });
    });
  }

  const raitings = document.querySelectorAll(".raiting");
  raitings.forEach((raiting) => {
    const raitingNum = raiting.dataset.raiting;
    const raitingText = `raiting ${raitingNum}`;

    for (let i = 0; i < 5; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.2273 6.46146C18.1699 6.29487 18.0642 6.1485 17.9232 6.0404C17.7822 5.93231 17.6122 5.86722 17.4341 5.85319L12.2247 5.44558L9.97034 0.531754C9.89855 0.37349 9.78177 0.239068 9.63411 0.144711C9.48645 0.050354 9.31421 9.52702e-05 9.13818 1.35311e-07C8.96215 -9.49996e-05 8.78985 0.0499776 8.64209 0.144175C8.49432 0.238372 8.37739 0.372668 8.30542 0.530855L6.05111 5.44558L0.841621 5.85319C0.66659 5.86684 0.49926 5.92986 0.359649 6.03471C0.220038 6.13955 0.114058 6.28178 0.054388 6.44439C-0.00528203 6.60699 -0.0161155 6.78308 0.0231838 6.95158C0.0624832 7.12009 0.150251 7.27388 0.275987 7.39455L4.12577 11.09L2.76423 16.8956C2.72288 17.0713 2.73613 17.2552 2.80226 17.4234C2.86838 17.5917 2.98432 17.7364 3.13504 17.839C3.28576 17.9415 3.4643 17.997 3.64748 17.9984C3.83066 17.9998 4.01003 17.9469 4.16232 17.8467L9.13788 14.5804L14.1134 17.8467C14.2691 17.9484 14.4527 18.0008 14.6395 17.9968C14.8262 17.9927 15.0073 17.9325 15.1583 17.8241C15.3092 17.7157 15.4229 17.5644 15.4839 17.3905C15.5449 17.2166 15.5504 17.0285 15.4997 16.8515L13.8283 11.0927L17.9733 7.41975C18.2447 7.1786 18.3443 6.80248 18.2273 6.46146Z"/>
      </svg>
      `;
      div.classList.add("raiting__item");

      raiting.appendChild(div);
    }

    const items = raiting.querySelectorAll(".raiting__item");

    for (let i = 0; i < raitingNum; i++) {
      items[i].classList.add("raiting__item--active");
    }

    raiting.setAttribute("title", raitingText);
    raiting.setAttribute("aria-label", raitingText);
  });

  if (document.querySelector(".blog__slider")) {
    const swiper = new Swiper(".blog__slider", {
      pagination: {
        el: ".pagination",
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          grid: {
            rows: 3,
            fill: "row",
          },
        },
        575: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
        991: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
      },
    });
  }

  const questions = document.querySelectorAll(".accardeon__name");

  if (questions.length > 0) {
    questions.forEach((question) => {
      question.nextElementSibling.style.maxHeight = 0;
      question.addEventListener("click", (evt) => {
        question.nextElementSibling.classList.toggle("accardeon__text--active");
        question.classList.toggle("accardeon__name--active");
        if (question.nextElementSibling.classList.contains("accardeon__text--active")) {
          question.nextElementSibling.style.maxHeight = question.nextElementSibling.scrollHeight + "px";
        } else {
          question.nextElementSibling.style.maxHeight = 0;
        }
      });
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
