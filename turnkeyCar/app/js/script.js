const header = document.querySelector(".header");
const intro = document.querySelector(".intro");

let heightHeader = header.offsetHeight;

document.addEventListener("scroll", () => {
  if (window.pageYOffset > heightHeader) {
    header.classList.add("header--fixed");
  } else {
    header.classList.remove("header--fixed");
  }
});

$(".cars__items").slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1220,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 825,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
