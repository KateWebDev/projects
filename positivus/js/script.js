document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu").classList.toggle("menu--active");
    document.querySelector("body").classList.toggle("lock");
    document.querySelector(".header__burger").classList.toggle("header__burger--active");
  } else if (!evt.target.closest(".arrow")) {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header__burger").classList.remove("header__burger--avtive");
  }
});

document.addEventListener("keyup", (evt) => {
  if (evt.key === "Escape") {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    //document.querySelector(".close").classList.remove("close--active");
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
});

const linksTeam = document.querySelectorAll(".team__item");
window.addEventListener("resize", function () {
  if (window.innerWidth < 693) {
    linksTeam.forEach((linkTime) => {
      linkTime.classList.remove("hidden");
    });
    for (let i = 0; i < linksTeam.length; i++) {
      if (i > 3) {
        linksTeam[i].classList.add("hidden");
      }
    }
  } else {
    linksTeam.forEach((linkTime) => {
      linkTime.classList.remove("hidden");
    });
    for (let i = 0; i < linksTeam.length; i++) {
      if (i > 5) {
        linksTeam[i].classList.add("hidden");
      }
    }
  }
});

const btnAdd = document.querySelector(".team__btn");
btnAdd.addEventListener("click", () => {
  const links = document.querySelectorAll(".team__item.hidden");
  const num = 3;
  let count = links.length;
  if (count > 0) {
    if (count >= num) {
      for (let i = 0; i < num; i++) {
        links[i].classList.remove("hidden");
      }
    } else {
      for (let i = 0; i < count; i++) {
        links[i].classList.remove("hidden");
      }
    }
  }
});

const questions = document.querySelectorAll(".accardeon__name");
questions.forEach((question) => {
  question.addEventListener("click", (evt) => {
    question.nextElementSibling.classList.toggle("accardeon__text--active");
    question.classList.toggle("accardeon__name--active");
    question.parentNode.classList.toggle("accardeon__item--active");
    if (question.nextElementSibling.classList.contains("accardeon__text--active")) {
      question.nextElementSibling.style.maxHeight = question.nextElementSibling.scrollHeight + "px";
    } else {
      question.nextElementSibling.style.maxHeight = null;
    }
  });
});

const swiper = new Swiper(".testimonials__slider", {
  navigation: {
    prevEl: ".testimonials__arrow.swiper-button-prev",
    nextEl: ".testimonials__arrow.swiper-button-next",
  },
  pagination: {
    el: ".testimonials__pagination.swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 50,
  centeredSlides: true,
  initialSlide: 1,
  loopedSlides: 3,
});
