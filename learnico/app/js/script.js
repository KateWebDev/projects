const dopBtn = document.querySelector(".dop__btn");
if (dopBtn) {
  dopBtn.addEventListener("click", () => {
    document.querySelector(".dop").style.display = "none";
  });
}

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

// если нам нужно чтобы рейтинг у каждого был свой. то дабавляем дата атрибут со своим значением в html : data-rateyo-rating="4.3"
$(".intro__rateyo-stars").rateYo({
  starWidth: "24px",
  normalFill: "#000000",
  ratedFill: "#e0b420",
  readOnly: true,
  rating: 4,
  fullStar: true,
  maxValue: 4,
  numStars: 4,
});

$(".testimonials__rateyo").rateYo({
  numStars: 5,
  fullStar: true,
  starWidth: "20px",
  spacing: "4px",
  normalFill: "#000000",
  ratedFill: "#e0b420",
  readOnly: true,
});

let swiperTutors = new Swiper(".testimonials__slider", {
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
  grabCursor: true,
  slidesPerView: "auto",
  loopedSlides: 3,
  centeredSlides: true,
  initialSlide: 1,
  breakpoints: {
    320: { spaceBetween: 15, autoHeight: true },
    768: { spaceBetween: 25, autoHeight: true },
    991: { spaceBetween: 32, autoHeight: false },
  },
});
