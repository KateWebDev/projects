//Бургер

document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu").classList.toggle("menu--active");
    document.querySelector("body").classList.toggle("body__lock");
  } else {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("body__lock");
  }
});

$(".intro__slider").slick({
  arrows: false,
  dots: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 635,
      settings: {
        dots: false,
      },
    },
  ],
});

$(".reviews__items").slick({
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
