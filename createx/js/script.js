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
    document.querySelector(".header__burger").classList.remove("header__burger--avtive");
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
});

// Аккардеон

const questions = document.querySelectorAll(".accardeon__name");

if (questions.length > 0) {
  questions.forEach((question) => {
    question.addEventListener("click", (evt) => {
      question.nextElementSibling.classList.toggle("accardeon__text--active");
      question.classList.toggle("accardeon__name--active");
      if (question.nextElementSibling.classList.contains("accardeon__text--active")) {
        question.nextElementSibling.style.maxHeight = question.nextElementSibling.scrollHeight + "px";
      } else {
        question.nextElementSibling.style.maxHeight = null;
      }
    });
  });
}

let mixer = mixitup(".directions__works");

let swiperTutors = new Swiper(".tutors__slider", {
  navigation: {
    prevEl: ".tutors .arrows__arrow--prev",
    nextEl: ".tutors .arrows__arrow--next",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  slidesPerGroup: 1,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    478: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  },
});

let swiperTestimonials = new Swiper(".testimonials__slider", {
  navigation: {
    prevEl: ".testimonials .arrows__arrow--prev",
    nextEl: ".testimonials .arrows__arrow--next",
  },
  pagination: {
    el: ".testimonials__pagination",
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
  autoHeight: true,
});
