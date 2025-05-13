// Плавный переход между страницами
/*
barba.init({
  sync:true,
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }]
});
*/
/*
  шаг 2 - в body добавить дата-атрибут data-barba="wrapper"
  шаг 3 - блоку куда будет переход добавить 2 дата-атрибута data-barba="container" data-barba-namespace="home"
  пример: <main data-barba="container" data-barba-namespace="home">
  шаг 4 - настройка анимации - это все что находится после слова   transitions: [{ - может быть воообще другое - смотреть варианты в документации
*/
//Фиксированная шапка
/*
// 1 ) найти высоту блока header (offsetHeight)
// 2 ) проверить если прокрученная область больше высоты то сделать фиксированную шапку (добавить класс fixed в котором будет display:fixed)


const header = document.querySelector('.header');
const up = document.querySelector('.up');

let heightHeader = header.offsetHeight;


document.addEventListener('scroll', ()=>{
    if(window.pageYOffset > heightHeader){
    header.classList.add('header--fixed')
    up.classList.add('up--active')
} else {
    header.classList.remove('header--fixed')
    up.classList.remove('up--active')
}
})
*/
//Бургер

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
    document.querySelector(".search__input").classList.remove("search__input--active");
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

document.addEventListener("click", (evt) => {
  if (evt.target.closest(".search__button")) {
    evt.preventDefault();
    document.querySelector(".search__input").classList.toggle("search__input--active");
  } else {
    document.querySelector(".search__input").classList.remove("search__input--active");
  }
});

$(".slider__raiting").rateYo({
  rating: 5,
  numStars: 5,
  starWidth: "23px",
  normalFill: "#ffffff",
  ratedFill: "#f1b90b",
  readOnly: true,
  spacing: "10px",
});

if (document.querySelector(".reviews__slider")) {
  const swiper = new Swiper(".reviews__slider", {
    navigation: {
      prevEl: ".slider__button.slider__button--prev",
      nextEl: ".slider__button.slider__button--next",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    autoHeight: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 300,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
}
