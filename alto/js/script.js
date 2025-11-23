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
  const videoBtns = document.querySelectorAll(".video__button");
  const videos = document.querySelectorAll("video");
  videoBtns.forEach((videoBtn, index) => {
    videoBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      videos[index].play();
      videos[index].setAttribute("controls", "");
      videoBtn.classList.add("video__button--open");
    });
  });
  videos.forEach((video, index) => {
    video.addEventListener("pause", function () {
      videos[index].removeAttribute("controls");
      videoBtns[index].classList.remove("video__button--open");
    });
  });
  const raitings = document.querySelectorAll(".raiting");
  raitings.forEach((raiting) => {
    const raitingNum = raiting.dataset.raiting;
    const raitingText = `raiting ${raitingNum}`;

    for (let i = 0; i < 5; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="star-1" fill-rule="evenodd" clip-rule="evenodd" d="M15 21.5L7.35876 25.5172L8.8181 17.0086L2.63623 10.9828L11.1794 9.74139L15 2L18.8206 9.74139L27.3637 10.9828L21.1818 17.0086L22.6412 25.5172L15 21.5Z"   />
          <path id="star-2" fill-rule="evenodd" clip-rule="evenodd" d="M19.9771 22.6033L18.6446 14.8342L24.2892 9.33201L16.4885 8.1985L12.9999 1.12988L9.51138 8.1985L1.71069 9.33201L7.35532 14.8342L6.0228 22.6033L12.9999 18.9352L19.9771 22.6033Z"/>
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
});
