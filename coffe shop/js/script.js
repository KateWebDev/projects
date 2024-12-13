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
  // }
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

if (document.querySelectorAll(".slider__raiting").length > 0) {
  $(".slider__raiting").rateYo({
    numStars: 5,
    starWidth: "20px",
    normalFill: "#121315",
    ratedFill: "#faa61a",
    readOnly: true,
    spacing: "4px",
    fullStar: false,
  });
}

if (document.querySelectorAll(".products__raiting").length > 0) {
  if (window.innerWidth <= 767) {
    $(".products__raiting").rateYo({
      numStars: 5,
      starWidth: "10px",
      normalFill: "#121315",
      ratedFill: "#C99E71",
      readOnly: true,
      spacing: "4px",
      fullStar: false,
    });
  } else {
    $(".products__raiting").rateYo({
      numStars: 5,
      starWidth: "20px",
      normalFill: "#121315",
      ratedFill: "#C99E71",
      readOnly: true,
      spacing: "4px",
      fullStar: false,
    });
  }
}

if (document.querySelector(".reviews__slider")) {
  const swiper = new Swiper(".reviews__slider", {
    navigation: {
      prevEl: ".reviews__button.reviews__button--prev",
      nextEl: ".reviews__button.reviews__button--next",
    },
    scrollbar: {
      el: ".reviews__scrollbar",
      draggable: false,
      dragSize: "auto",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,

        pagination: {
          el: ".reviews__pagination",
          clickable: true,
          type: "custom",
          renderCustom: function (swiper, current, total) {
            return current + "/" + total + " People";
          },
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2,

        pagination: {
          el: ".reviews__pagination",
          clickable: true,
          type: "custom",
          renderCustom: function (swiper, current, total) {
            return current * 2 + "/" + total * 2 + " People";
          },
        },
      },
    },
  });
}
