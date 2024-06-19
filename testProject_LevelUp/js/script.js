$(".testimonials__items").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 579,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

let timerAll = "30:00";
let interval = setInterval(function () {
  let timer = timerAll.split(":");
  let minutes = parseInt(timer[0], 10);
  let seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = seconds < 0 ? --minutes : minutes;
  if (minutes < 0) clearInterval(interval);
  seconds = seconds < 0 ? 59 : seconds;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  $(".order__timer").html(minutes + ":" + seconds);
  timerAll = minutes + ":" + seconds;
}, 1000);
