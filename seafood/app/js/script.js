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

$(".intro__items").slick({
  dots: true,
  arrows: true,
  fade: true,
  adaptiveHeight: true,
  prevArrow:
    '<button class="intro__button slick-btn slick-btn--prev" type="button"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.31887 0.966387L0.510445 8.55589C0.13385 8.92193 0.13385 9.51536 0.510445 9.88136L1.42117 10.7666C1.79712 11.132 2.40643 11.1327 2.78327 10.7681L9.00074 4.75331L15.2182 10.7682C15.595 11.1327 16.2043 11.132 16.5803 10.7666L17.491 9.8814C17.8676 9.51536 17.8676 8.92193 17.491 8.55593L9.68257 0.966426C9.30602 0.60039 8.69546 0.600391 8.31887 0.966387Z"/></svg></button>',
  nextArrow:
    '<button class="intro__button slick-btn slick-btn--next" type="button"><svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.68113 10.6603L17.4896 3.07082C17.8661 2.70478 17.8661 2.11135 17.4896 1.74535L16.5788 0.860156C16.2029 0.494746 15.5936 0.494042 15.2167 0.858594L8.99926 6.8734L2.78183 0.858556C2.40499 0.494004 1.79569 0.494706 1.41974 0.860117L0.509008 1.74531C0.132414 2.11135 0.132414 2.70478 0.509008 3.07078L8.31743 10.6603C8.69398 11.0263 9.30454 11.0263 9.68113 10.6603Z"/></svg></button>',
  responsive: [
    {
      breakpoint: 500,
      settings: {
        dots: false,
        arrows: false,
      },
    },
  ],
});

$(".product__types").slick({
  dots: false,
  arrows: true,
  prevArrow:
    '<button class="product__button slick-btn slick-btn--prev" type="button"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.31887 0.966387L0.510445 8.55589C0.13385 8.92193 0.13385 9.51536 0.510445 9.88136L1.42117 10.7666C1.79712 11.132 2.40643 11.1327 2.78327 10.7681L9.00074 4.75331L15.2182 10.7682C15.595 11.1327 16.2043 11.132 16.5803 10.7666L17.491 9.8814C17.8676 9.51536 17.8676 8.92193 17.491 8.55593L9.68257 0.966426C9.30602 0.60039 8.69546 0.600391 8.31887 0.966387Z"/></svg></button>',
  nextArrow:
    '<button class="product__button slick-btn slick-btn--next" type="button"><svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.68113 10.6603L17.4896 3.07082C17.8661 2.70478 17.8661 2.11135 17.4896 1.74535L16.5788 0.860156C16.2029 0.494746 15.5936 0.494042 15.2167 0.858594L8.99926 6.8734L2.78183 0.858556C2.40499 0.494004 1.79569 0.494706 1.41974 0.860117L0.509008 1.74531C0.132414 2.11135 0.132414 2.70478 0.509008 3.07078L8.31743 10.6603C8.69398 11.0263 9.30454 11.0263 9.68113 10.6603Z"/></svg></button>',
  asNavFor: ".product__items",
  focusOnSelect: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  vertical: true,
  adaptiveHeight: true,

  responsive: [
    {
      breakpoint: 850,
      settings: {
        vertical: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 100,
      },
    },
    {
      breakpoint: 500,
      settings: {
        vertical: false,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: 100,
      },
    },
  ],
});

$(".product__items").slick({
  dots: false,
  arrows: false,
  fade: true,
  asNavFor: ".product__types",
});
