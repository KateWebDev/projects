$(".clients__slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 30,
  infinite: false,
  initialSlide: 2,
  prevArrow:
    '<button class="slick-btn slick-btn--prev" type="button"><img src="../images/main/clients/arrowleft.svg" alt=""></button>',
  nextArrow:
    '<button class="slick-btn slick-btn--next" type="button"><img src="../images/main/clients/arrowright.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        dots: true,
        centerPadding: 0,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        dots: true,
        centerPadding: 0,
      },
    },
  ],
});

$(".clients__slide").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1],
  },
});
