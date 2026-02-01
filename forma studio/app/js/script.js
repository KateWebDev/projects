"use strict";

document.addEventListener("DOMContentLoaded", () => {
  /*
    // header fixed
  const header = document.querySelector(".header");
  const up = document.querySelector(".up");
  const heightHeader = header.offsetHeight;
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > heightHeader) {
      if (header) {
        header.classList.add("header--fixed");
      }
      if (up) {
        up.classList.add("up--active");
      }
    } else {
      if (header) {
        header.classList.remove("header--fixed");
      }
      if (up) {
        up.classList.remove("up--active");
      }
    }
  });
  //Бургер
  document.addEventListener("click", (evt) => {
    if (evt.target.closest(".header__burger")) {
      if (document.querySelector(".menu")) {
        document.querySelector(".menu").classList.toggle("menu--active");
      }
      if (document.querySelector("body")) {
        document.querySelector("body").classList.toggle("lock");
      }
      if (document.querySelector(".header__burger")) {
        document.querySelector(".header__burger").classList.toggle("header__burger--active");
      }
    } else if (!evt.target.closest(".arrow")) {
      if (document.querySelector(".menu")) {
        document.querySelector(".menu").classList.remove("menu--active");
      }
      if (document.querySelector(".submenu__items")) {
        document.querySelector(".submenu__items").classList.remove("submenu__items--active");
        document.querySelector(".submenu__items").classList.remove("submenu__items--open");
      }
      if (document.querySelector("body")) {
        document.querySelector("body").classList.remove("lock");
      }
      if (document.querySelector(".header__burger")) {
        document.querySelector(".header__burger").classList.remove("header__burger--active");
      }
    } else if (evt.target.closest(".menu__link")) {
      let links = document.querySelectorAll(".menu__link");
      links.forEach((link) => {
        link.classList.remove("menu__link--active");
      });
      evt.target.classList.add("menu__link--active");
      if (document.querySelector(".header__burger")) {
        document.querySelector(".header__burger").classList.remove("header__burger--active");
      }
    } else if (evt.target.closest(".submenu__link")) {
      if (document.querySelector(".header__burger")) {
        document.querySelector(".header__burger").classList.remove("header__burger--active");
      }
    } else if (evt.target.closest(".up") || evt.target.closest(".logo__img")) {
      let links = document.querySelectorAll(".menu__link");
      links.forEach((link) => {
        link.classList.remove("menu__link--active");
      });
      if (document.querySelectorAll(".menu__link").length > 0) {
        document.querySelectorAll(".menu__link")[0].classList.add("menu__link--active");
      }
    } else if (evt.target.closest(".header__btn")) {
      evt.preventDefault();
      if (document.querySelector("body")) {
        document.querySelector("body").classList.toggle("lock");
      }
      if (document.querySelector(".modal")) {
        document.querySelector(".modal").classList.toggle("modal--active");
      }
    } else if (evt.target.closest(".modal__close")) {
      if (document.querySelector("body")) {
        document.querySelector("body").classList.remove("lock");
      }
      if (document.querySelector(".modal")) {
        document.querySelector(".modal").classList.remove("modal--active");
      }
    }
  });
  //закрытие по нажатию кнопки esc
  document.addEventListener("keyup", (evt) => {
    if (evt.key === "Escape") {
      if (document.querySelector(".menu")) {
        document.querySelector(".menu").classList.remove("menu--active");
      } else if (document.querySelector(".submenu__items")) {
        document.querySelector(".submenu__items").classList.remove("submenu__items--active");
        document.querySelector(".submenu__items").classList.remove("submenu__items--open");
      } else if (document.querySelector(".body")) {
        document.querySelector("body").classList.remove("lock");
      } else if (document.querySelector(".close")) {
        document.querySelector(".close").classList.remove("close--active");
      } else if (document.querySelector(".header__burger")) {
        document.querySelector(".header__burger").classList.remove("header__burger--active");
      }
    }
  });
  */
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
  /*
// При изменении размера экрана выполняются определенные действия (в данном примере расччитывается высота экрана минус размер шапки)

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
*/
  //Бургер
  /*
document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu").classList.toggle("menu--active");
    document.querySelector("body").classList.toggle("lock");
    document.querySelector(".header__burger").classList.toggle("header__burger--active");
  } else if (!evt.target.closest(".arrow")) {
    document.querySelector(".menu").classList.remove("menu--active");
  
 //   document.querySelector(".submenu__items").classList.remove("submenu__items--active");
  //  document.querySelector(".submenu__items").classList.remove("submenu__items--open");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header__burger").classList.remove("header__burger--active");
  }
});
*/
  /*
//закрытие по нажатию кнопки esc

document.addEventListener("keyup", (evt) => {
  if (evt.key === "Escape") {
    document.querySelector(".menu").classList.remove("menu--active");

//    document.querySelector(".submenu__items").classList.remove("submenu__items--active");
 //   document.querySelector(".submenu__items").classList.remove("submenu__items--open");

    document.querySelector("body").classList.remove("lock");
    //document.querySelector(".close").classList.remove("close--active");
    document.querySelector(".header__burger").classList.remove("header__burger--active");
  }
});

*/
  /*
//Бургер варинат 2 - если закрыть нужно только по другой кнопке
document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu").classList.add("menu--active");
    document.querySelector("body").classList.add("lock");
    document.querySelector(".header__burger").classList.toggle("header__burger--active");
    document.querySelector(".close").classList.add("close--active");
  } else if (evt.target.closest(".close.close--active")) {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".close").classList.remove("close--active");
  } else if (evt.target.closest(".menu__link")) {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".close").classList.remove("close--active");
  }
  });
  */
  /*else if (!evt.target.closest(".arrow")) {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header__burger").classList.remove("header__burger--avtive");
    document.querySelector(".dop-menu").classList.remove("dop-menu--active");
  }*/
  /*
// Пункты меню
document.addEventListener("click", (evt) => {
  if (evt.target.closest(".menu__link")) {
    let links = document.querySelectorAll(".menu__link");
    links.forEach((link) => {
      link.classList.remove("menu__link--active");
    });
    evt.target.classList.add("menu__link--active");
    document.querySelector(".header__burger").classList.remove("header__burger--active");
  }
//  if (evt.target.closest(".submenu__link")) {
  //  document.querySelector(".header__burger").classList.remove("header__burger--active");
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
*/
  /*

// если нужно чтобы 2 меню были связаны (пункты меню)
let links = document.querySelectorAll(".header .menu__link");
let linksLeft = document.querySelectorAll(".left .menu__link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("menu__link--active");
    });

    linksLeft.forEach((linkLeft) => {
      linkLeft.classList.remove("menu__link--active");
    });

    links[i].classList.add("menu__link--active");
    linksLeft[i].classList.add("menu__link--active");
  });

  linksLeft[i].addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("menu__link--active");
    });

    linksLeft.forEach((linkLeft) => {
      linkLeft.classList.remove("menu__link--active");
    });

    links[i].classList.add("menu__link--active");
    linksLeft[i].classList.add("menu__link--active");
  });
}
*/
  /*
// дойдя до определенно высоты элемента меняется ссылка на боковом меню в статус активен

const introItem = document.getElementById("intro");
const skillsItem = document.getElementById("skills");
const portfolioItem = document.getElementById("portfolio");
const contactsItem = document.getElementById("contacts");

const introMenu = document.querySelector(".menu__link--intro");
const skillsMenu = document.querySelector(".menu__link--skills ");
const portfolioMenu = document.querySelector(".menu__link--portfolio ");
const contactsMenu = document.querySelector(".menu__link--contacts ");

const introH = introItem.offsetTop;
const skillsH = skillsItem.offsetTop;
const portfolioH = portfolioItem.offsetTop;
const contactsH = contactsItem.offsetTop;

document.addEventListener("scroll", () => {
  if (window.pageYOffset > introH) {
    skillsMenu.classList.remove("menu__link--active");
    introMenu.classList.add("menu__link--active");
    portfolioMenu.classList.remove("menu__link--active");
    contactsMenu.classList.remove("menu__link--active");
  }
  if (window.pageYOffset > skillsH) {
    skillsMenu.classList.add("menu__link--active");
    introMenu.classList.remove("menu__link--active");
    portfolioMenu.classList.remove("menu__link--active");
    contactsMenu.classList.remove("menu__link--active");
  }
  if (window.pageYOffset > portfolioH) {
    skillsMenu.classList.remove("menu__link--active");
    introMenu.classList.remove("menu__link--active");
    portfolioMenu.classList.add("menu__link--active");
    contactsMenu.classList.remove("menu__link--active");
  }
  if (window.pageYOffset > contactsH) {
    skillsMenu.classList.remove("menu__link--active");
    introMenu.classList.remove("menu__link--active");
    portfolioMenu.classList.remove("menu__link--active");
    contactsMenu.classList.add("menu__link--active");
  }
});
*/
  /*
// Многоуровневое меню (тачскрин)
const arrows = document.querySelectorAll(".arrow");
if(arrows.length > 0){
for (let i = 0; i < arrows.length; i++) {
    let link = arrows[i].previousElementSibling;

    if (link.closest(".menu__link")) {
      link.classList.add("menu__link--arrow");
    } else if (link.closest(".submenu__link")) {
      link.classList.add("submenu__link--arrow");
    }
    let list = arrows[i].nextElementSibling;
    arrows[i].addEventListener("click", () => {
      arrows[i].classList.toggle("arrow--active");
      list.classList.toggle("submenu__items--active");
      list.classList.toggle("submenu__items--open");
      console.log(arrows[i]);
    });
  }
}

*/
  //Звездный рейтинг
  /*
// если нам нужно чтобы рейтинг у каждого был свой. то дабавляем дата атрибут со своим значением в html : data-rateyo-rating="4.3"

$(".products__raiting").rateYo({
    rating: 5, //рейтинг
    numStars: 5, //кол-во звезд
    starWidth: "17px", //размер звездочек
    normalFill: "#ccccce", // цвет не закрашенных звездочек
    ratedFill: "#ffc35b", // цвет закрашенных звездочек
    readOnly: true, // при наведении на звездочки рейтинг не изменяется и не ховерится
    spacing: "5px", // отсутпе между звездами
    fullStar: true, //закрашивать звездочку полностью
});

// вариант 2 с функцией и разным размером звездочек в зависимости от ширины экрана с которой зашел пользователь

  function showRaiting(className, widthStars) {
    $(`${className}`).rateYo({
      numStars: 5,
      starWidth: `${widthStars}px`,
      normalFill: "#c4c4c4",
      ratedFill: "#ffd336",
      readOnly: true,
      spacing: "10px",
      fullStar: true,
    });
  }

  if (document.querySelector(".about__raiting")) {
    if (window.innerWidth <= 768) {
      showRaiting(".about__raiting", 30);
    } else {
      showRaiting(".about__raiting", 50);
    }
  }


*/
  // Таймер
  /*
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}


function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.deal__days');
    const hoursSpan = clock.querySelector('.deal__hours');
    const minutesSpan = clock.querySelector('.deal__minutes');
    const secondsSpan = clock.querySelector('.deal__seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

//const deadline = new Date(Date.parse(new Date()) + 29 * 24 * 60 * 60 * 1000); //если нам нужно чтобы после каждого обновления страницы дата обнулялась

const deadline = $('.deal__time').attr('data-time'); //если нам нужно чтобы дата после каждого обновления страницы НЕ обнулялась

// в HTML мы прописываем дата атрибут в котором будет записана конечная дата
// пример: <div id="clockdiv" class="deal__time" data-time="'2023-06-25'">

initializeClock('clockdiv', deadline);
*/
  /*
//Таймер вариант 2 (видео Ивана Петриченко)

//const endDate = new Date("2025-01-01"); // обычно в формате строки будет приходить дата с input
const endDate = new Date(document.querySelector(".timer").dataset.timer); // в HTML дата проставлена в дата атрибуте data-timer (пример data-timer='2025-01-01')

function timer(date) {
  const allMil = date.getTime() - new Date().getTime(),
    days = Math.floor(allMil / (1000 * 60 * 60 * 24)),
    hours = Math.floor((allMil / (1000 * 60 * 60)) % 24),
    minute = Math.floor((allMil / (1000 * 60)) % 60),
    second = Math.floor((allMil / 1000) % 60);

  return {
    allMil,
    days,
    hours,
    minute,
    second,
  };
}

function showTimer(classTimer, date) {
  const timerId = setInterval(addData, 1000);
  const box = document.querySelector(classTimer);
  addData();

  function addData() {
    const t = timer(date),
      days = t.days,
      hours = t.hours,
      minutes = t.minute,
      seconds = t.second;

    if (t.allMil > 0) {
      box.querySelector("#days").textContent = days < 10 ? "0" + days : days;
      box.querySelector("#hours").textContent = hours < 10 ? "0" + hours : hours;
      box.querySelector("#minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
      box.querySelector("#seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
    } else {
      box.querySelector("#days").textContent = "00";
      box.querySelector("#hours").textContent = "00";
      box.querySelector("#minutes").textContent = "00";
      box.querySelector("#seconds").textContent = "00";

      clearInterval(timerId);
    }
  }
}

showTimer(".timer", date);

*/
  /*
// Показать еще

const btnAdd = document.querySelector(".portfolio__add");
if(btnAdd){
btnAdd.addEventListener("click", () => {
  const links = document.querySelectorAll(".portfolio__item.hidden");
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

  if (count <= 0 || count < num) {
    btnAdd.classList.add("hidden");
  }
});
}
*/
  /*
// Показать еще V2
function addCards(countOpen, count, num, linksHidden) {
  if (countOpen > 0) {
    for (let k = 0; k < countOpen; k++) {
      if (count < num) {
        for (let i = 0; i < count; i++) {
          linksHidden[i].classList.remove("hidden");
        }
      } else {
        for (let i = 0; i < num; i++) {
          linksHidden[i].classList.remove("hidden");
        }
      }
    }
    countOpen--;
  }
  if (countOpen === 0) {
    btnAdd.classList.add("hidden");
  }
}

const btnAdd = document.querySelector(".products__btn");
const num = 3; // сколько нужно добавлять
let count = document.querySelectorAll(".products__item.hidden").length;
let countOpen = Math.ceil(count / num);

if (countOpen === 0) {
  btnAdd.classList.add("hidden");
}

if (btnAdd) {
  btnAdd.addEventListener("click", () => {
    let linksHidden = document.querySelectorAll(".products__item.hidden");
    let count = document.querySelectorAll(".products__item.hidden").length;
    let countOpen = Math.ceil(count / num);
    addCards(countOpen, count, num, linksHidden);
  });

  window.addEventListener("resize", function () {
    btnAdd.classList.remove("hidden");
    btnAdd.addEventListener("click", () => {
      let linksHidden = document.querySelectorAll(".products__item.hidden");
      let count = document.querySelectorAll(".products__item.hidden").length;
      let countOpen = Math.ceil(count / num);
      addCards(countOpen, count, num, linksHidden);
    });
  });
}
*/
  /*
// Если нужнол чтобы на 1 размере экрана было 6 карточек, а при уменьшении экрана стало 4 карточки
const linksTeam = document.querySelectorAll(".products__item");
function showBlocks(className) {
  if (window.innerWidth < 768) {
    className.forEach((link) => {
      link.classList.remove("hidden");
    });
    for (let i = 0; i < className.length; i++) {
      if (i >= 8) {
        className[i].classList.add("hidden");
      }
    }
  } else {
    className.forEach((link) => {
      link.classList.remove("hidden");
    });
    for (let i = 0; i < className.length; i++) {
      if (i >= 9) {
        className[i].classList.add("hidden");
      }
    }
  }
}
showBlocks(linksTeam);
if (linksTeam.length > 0) {
  window.addEventListener("resize", function () {
    showBlocks(linksTeam);
  });
}
*/
  /*
// Аккардеон
const questions = document.querySelectorAll(".accardeon__name"); // это кнопка button на которую мы будем нажимать, и в которой написан наш вопрос

if(questions.length > 0){
questions.forEach((question) => {
  question.nextElementSibling.style.maxHeight = 0;
  question.addEventListener("click", (evt) => {
    // в запросе сразу после кнопки идет текст с ответом, отсюда и используется nextElementSibling (смотрит соседний элемент кнопки)
    question.nextElementSibling.classList.toggle("accardeon__text--active"); // чтоб текст показывать (opacity: 1)
    question.classList.toggle("accardeon__name--active"); //чтоб стрелочку переворачивать
  question.parentNode.classList.toggle("accardeon__item--active"); //если нужно что-то изменить в родителе accardeon__item (например цвет заливки)
    if (question.nextElementSibling.classList.contains("accardeon__text--active")) {
      question.nextElementSibling.style.maxHeight = question.nextElementSibling.scrollHeight + "px";
    } else {
      question.nextElementSibling.style.maxHeight = 0;
    }
  });
});
}

*/
  /*
// Табы
let tabs = document.querySelectorAll(".tabs__item");
let tabsContents = document.querySelectorAll(".tabs__block");

for (let i = 0; i < tabs.length; i++) {
  //
  tabs[i].addEventListener("click", (evt) => {
    evt.preventDefault();
    tabs.forEach((tab) => {
      tab.classList.remove("tabs__item--active");
    });
    tabs[i].classList.add("tabs__item--active");

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove("tabs__block--active");
    });
    tabsContents[i].classList.add("tabs__block--active");
    //если в табах есть слайдер, то его нужно переинициализировать перед каждым переходом табов
    //$(".tabs__slider").slick("reinit");
  });
}
*/
  /*
// Табы версия 2 с делегированным соытием

const buttons = document.querySelectorAll(".tabheader__item"); // кнопка
const contents = document.querySelectorAll(".tabcontent"); // контент
const activeClass = "tabheader__item_active"; // активныц класс

const parentTab = document.querySelector(".tabcontainer"); // родитель табов

let showTabs = () => {
  buttons.forEach((btn, index) => {
    if (btn.classList.contains(activeClass)) {
      contents.forEach((content) => {
        content.classList.remove("show");
        content.classList.add("hide");
      });
      contents[index].classList.add("show");
      contents[index].classList.remove("hide");
    }
  });
};

showTabs();

parentTab.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target && evt.target.classList.contains("tabheader__item")) {
    buttons.forEach((btn) => {
      btn.classList.remove(activeClass);
    });
    evt.target.classList.add(activeClass);
  }

  showTabs();
});

*/
  /*
// cookie
const cookie = document.querySelector(".cookie");
const cookieBtn = document.querySelector(".cookie__btn");
function cookies() {
  if (!Cookies.get("hide-cookie")) {
    setTimeout(() => {
      cookie.style.display = "flex";
    }, 1000);
    cookieBtn.addEventListener("click", () => {
      cookie.style.display = "none";
    });
  }
  Cookies.set("hide-cookie", "true", { expires: 30 });
}
cookies();
*/
  /*
// Плагин mixitup
  if (document.querySelectorAll(".tabs__content").length > 0) {
    document.querySelectorAll(".tabs__content").forEach((element) => {
      var mixer = mixitup(element);
    });
  }
*/
  /*
// Плагин mixitup с событием при нажатии на кнопки
let mixer = mixitup(".products__items", {
  callbacks: {
    onMixClick: function () {
      console.log(123);
    },
  },
});
*/
  /*
// Валидация формы через плагин jquery.validate
function validateForm(nameForm) {
  $(nameForm).validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Введите Ваше имя",
      },
      phone: {
        required: "Введите Ваш телефон",
      },
      email: {
        required: "Введите Вашу почту",
        email: "Не корректно введен электронный адрес почты",
      },
    },
  });
}

validateForm(".form");
*/
  /*
// маска на номер телефона
$.mask.definitions["h"] = "[0|1|3|4|5|6|7|9]";
$("input[type=tel]").mask("+7 h99 999 99 99");
*/
  /*
//Видео magnificPopup
$(".info__btn").magnificPopup({
  disableOn: 700,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
});
*/
  /*
//Галлерея magnificPopup
$(".photo__item").magnificPopup({
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
*/
  /*
// Автоматическая высота у textarea (увеличивается в зависимости от кол-ва введенного текста)

document.querySelectorAll('textarea').forEach(el => {
    el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
    el.classList.add('auto');
    el.addEventListener('input', e => {
        el.style.height = 'auto';
        el.style.height = (el.scrollHeight) + 'px';
    });
});

// а это добавить в CSS
//textarea {
//  resize: none;
//}
//textarea.auto {
//  overflow-y: hidden;
//}

*/
  // Счетчик чисел (при input = number)
  /*
const btnsPlus = document.querySelectorAll(".counter__button.counter__button--plus");
const btnsMinus = document.querySelectorAll(".counter__button.counter__button--minus");
const numbers = document.querySelectorAll(".counter__count-product");
if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("change", () => {
      btnsPlus[i].disabled = false;
      btnsMinus[i].disabled = false;
      if (Number(numbers[i].value) < numbers[i].getAttribute("min")) {
        numbers[i].value = numbers[i].getAttribute("min");
        btnsMinus[i].disabled = true;
      }
      if (Number(numbers[i].value) > numbers[i].getAttribute("max")) {
        numbers[i].value = numbers[i].getAttribute("max");
        btnsPlus[i].disabled = true;
      }
    });
  }
}

if (btnsPlus.length > 0) {
  for (let i = 0; i < btnsPlus.length; i++) {
    btnsPlus[i].addEventListener("click", () => {
      if (Number(numbers[i].value) < numbers[i].getAttribute("max")) {
        btnsPlus[i].disabled = false;
        btnsMinus[i].disabled = false;
        numbers[i].value = Number(numbers[i].value) + 1;
      }
      if (numbers[i].value === numbers[i].getAttribute("max")) {
        btnsPlus[i].disabled = true;
      }
    });
  }
}
if (btnsMinus.length > 0) {
  for (let i = 0; i < btnsMinus.length; i++) {
    btnsMinus[i].addEventListener("click", () => {
      if (numbers[i].value > numbers[i].getAttribute("min")) {
        btnsPlus[i].disabled = false;
        btnsMinus[i].disabled = false;
        numbers[i].value = Number(numbers[i].value) - 1;
      }
      if (numbers[i].value === numbers[i].getAttribute("min")) {
        btnsMinus[i].disabled = true;
      }
    });
  }
}
*/
  /*

// WOW.JS
//в HTML необходимо задать класс wow и второй класс с названием анимации

// доп настройки
//data-wow-duration: продолжительность анимации
//data-wow-delay: Задержка перед запуском анимации
//data-wow-offset: Расстояние до начала анимации (относится к нижней части браузера)
//data-wow-iteration: Количество повторений анимации

// пример  <section class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s"></section>

const wow = new WOW(
  {
    boxClass:     'wow',      // css-класс анимированного элемента (по умолчанию wow)
    animateClass: 'animated', // css-класс анимации (по умолчанию animated)
    offset:       0,          // расстояние до элемента при запуске анимации (по умолчанию 0)
    mobile:       true,       // запускает анимацию на мобильных устройствах (по умолчанию true)
    live:         true,       // работает с асинхронно загруженным контентом (по умолчанию true)
    callback:     function(box) {
      // обратный вызов выполняется каждый раз при запуске анимации
      // аргумент, который передается, - это анимируемый узел DOM
    },
    scrollContainer: null,    // необязательный селектор контейнера прокрутки, в противном случае используйте window
    resetAnimation: true,     // // сбросить анимацию в конце (по умолчанию true)
  }
);
wow.init();

*/
  /*
// до - после

const beforeAfter = document.querySelector(".before-after");
const before = beforeAfter.querySelector(".before-after__before");
const imgBeforeAfter = before.querySelector(".before-after__img");

const btnBeforeAfter = beforeAfter.querySelector(".before-after__runner");

let activeSlide = false;

document.addEventListener("DOMContentLoaded", () => {
  let widthSlider = beforeAfter.offsetWidth;
  console.log(widthSlider);
  imgBeforeAfter.style.width = `${widthSlider}px`;
});

function workBeforeAfter(x) {
  let left = Math.max(0, Math.min(x, beforeAfter.offsetWidth));
  before.style.width = `${left}px`;
  btnBeforeAfter.style.left = `${left}px`;
}

function pauseBeforeAfter(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  return false;
}

document.body.addEventListener("mouseup", () => {
  activeSlide = false;
});

document.body.addEventListener("mousedown", () => {
  activeSlide = true;
});

document.body.addEventListener("mouseleave", () => {
  activeSlide = false;
});

document.body.addEventListener("touchstart", () => {
  activeSlide = true;
});

document.body.addEventListener("touchend", () => {
  activeSlide = false;
});

document.body.addEventListener("touchcansel", () => {
  activeSlide = false;
});

document.body.addEventListener("mousemove", (evt) => {
  if (!activeSlide) {
    return;
  }
  let x = evt.pageX;
  x -= beforeAfter.getBoundingClientRect().left;

  workBeforeAfter(x);
  pauseBeforeAfter(evt);
});

document.body.addEventListener("touchmove", (evt) => {
  if (!activeSlide) {
    return;
  }
  let x;

  for (let i = 0; i < evt.changedTouches.length; i++) {
    x = evt.changedTouches[i].pageX;
  }
  x -= beforeAfter.getBoundingClientRect().left;

  workBeforeAfter(x);
  pauseBeforeAfter(evt);
});
*/
  /*
//кастомный select
customSelect(".form__select");
*/
  /*
// slider swiper
// Если нужно чтобы слайды были одной высоты то для swiper-wrapper указываем   align-items: stretch; а для swiper-slide    height: auto;
// Если нужно чтобы псевдоэлемент выходлил за границы по вертикали то можно swiper задать padding-top или padding-bottom смотря где должен вылазить элемент
if(document.querySelector('.name__slider')){
const swiper = new Swiper(".name__slider", {
  // стрелки - название классов может быть любым, то что указано, это  название по-умолчанию
  navigation: {
    prevEl: "#slider-button-prev",
    nextEl: "#slider-button-next",
  },
  // пагинация (буллеты)
  pagination: {
    el: ".swiper-pagination",
    //  type: "bullets", //стоит по умолчанию - можно не указывать 
    //чтобы по пагинации можно было нажимать
    clickable: true,
    // динамическая пагинация - точки будут изменять свой размер в зависимости от того на сколько далеко от активной точки
    dynamicBullets: true,
    // кастомная пагинация - выводит номер слайда
    renderBullet: function (index, className) {
      return '<span class = "' + className + '">' + (index + 1) + "</span>";
    },

  type: "custom",
      renderCustom: function (swiper, current, total) {
        return current * 2 + "/" + total * 2 + " People";
      },

  // фракция - текущаястраница слайдера из общего числа
  type: "fraction",

  // кастомный вывод фракции
  renderFraction: function (currentClass, totalClass) {
    return (
      'Фото <span class = "' + currentClass + '"></span>' + " из " + '<span class="' + totalClass + '"></span>'
    );
  },
  // Прогрессбар - отображается вверху экрана
  type: "progressbar",      
  },


  // Скролл
  scrollbar: {
    el: ".swiper-scrollbar",
    // Возможность перетаскивать скролл
    draggable: true,
  },

  // Перетаскивание слайдов на пк
  simulateTouch: true,

  // Чувствительность свайпа
  touchRatio: 1,

  // Угод перетаскивания слайда
  touchAngle: 45,

  // Курсор перетаскивания
  grabCursor: true,

  // Переключение при клике на соседний слайд
  slideToClickedSlide: true,

  // Навигация по хэшу

  hashNavigation: {
    // Отслеживать состояние
    watchState: true,
  },

  // Управление клавиатурой
  keyboard: {
    //включить / выключить управление клавиатурой
    enabled: true,
    // включить / выключить только когда слайдер в пределах вьюпорта (будет листаться только когда до него до скролили)
    onlyInViewport: true,
    // Включить / выключить управление клавишами pageUp и pageDown
    pageUpDown: true,
  },

  // Управление колесом мыши
  mousewheel: {
    // чувствительность колеса мыши
    sensitivity: 1,
    // Класс объекта на котором будет срабатывать прокрутка мышью
    eventsTarget: ".image-slider",
  },

  // Авто высота
  autoHeight: false,

  // Количество слайдов для показа,  можно включать не целые числа, а например 2.5 слайда
  // можно указать значение auto и ширина слайда будет формироваться самим контентом внутри него, или конкретно заданной шириной в CSS
  slidesPerView: 1,

  // Отключение функционала, если слайдов меньше чем нужно
  watchOverflow: true,

  // Отступ между слайдами
  spaceBetween: 50,

  // Количество пролистываемых слайдов
  slidesPerGroup: 1,

  // Активный слайд по центру
  centeredSlides: true,
  centeredSlidesBounds: true,

  // Старотовый слайд (нумерация слайдов начинается с 0)
  initialSlide: 0,

  // Мультирядность (необходимо отключить авто высоту если она включена, т.е.   autoHeight: false)
  slidesPerColumn: 2,

  // Бесконечная прокрутка ( не работает с Мультирядностью)
  loop: true,

  // Количество дублирующихся слайдов (если slidesPerView = auto)
  loopedSlides: 3,

  // Свободный режим - может перетаскивать (свайпать) слайды без фиксированной позиции, что-то вроде как будто скролишь ленту
  freeMode: true,

  // Автопрокрутка
  autoplay: {
    // Задержка
    delay: 1000,
    // Закончить на последнем слайде?
    stopOnLastSlide: true,
    // Отключить после ручного переключения
    disableOnInteraction: false,
  },

  // Скорость переключения слайдов
  speed: 300,

  // Вертикальный слайдер
  direction: "vertical",

  // Эффекты
  // slide - по умолчанию
  // fade - плавная смена (подходит когда выводится 1 слайд на странице)
  // flip
  // cube
  // coverflow

  effect: "slide",

  // Дополнение к effect: 'fade'
  fadeEffect: {
    // Паралельная смена прозрачности
    crossFade: true,
  },

  // Дополнение к effect: 'flip'
  flipEffect: {
    // Тень
    slideShadows: true,
    // Показ только активного слайда
    limitRotation: true,
  },
  // Дополнение к effect: 'cube'
  cubeEffect: {
    // Настройка тени
    slideShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  // Дополнение к effect: 'coverflow'
  coverfloweffect: {
    // угол
    rotate: 20,
    // наложение
    stretch: 50,
    // тень
    slideShadows: true,
  },

  // Адаптив (подход как на mobileFirst)
  breakpoints: {
    320: {},
    480: {},
  },

  // сетка на гридах
  grid: {
    rows: 2,
    fill: "row",
  },
});
}
*/
  // пример слайдера если он должен вылазить с 2 сторон по чуть-чуть
  /*
  if (document.querySelector(".reviews__slider")) {
    new Swiper(".reviews__slider", {
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      autoHeight: true,

      slidesPerGroup: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      initialSlide: 1,
      loop: true,  
      breakpoints: {
        320: { slidesPerView: 1 },
        480: { slidesPerView: 1.2, spaceBetween: 30 },
        768: { spaceBetween: 50 },
        1024: { slidesPerView: 1.3, spaceBetween: 80 },
      },
    });
  }
});
*/
  /*
// Календарь easepick
// вот отсюда взять CDN для подключегния в footer
// https://easepick.com/examples/basic.html
const picker = new easepick.create({
  element: document.getElementById("when"),
  css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
});
*/
  /*
//Lottie animation

let animation = lottie.loadAnimation({
  container: document.querySelector(".lottie"), // куда вставляем
  render: "svg", // рендер
  loop: true, // зацикливание
  path: "../images/lottie/animation.json", // откудв берем анимацию
});
*/
  // Модальное окно
  /*
// Модальное окно появляется через 10 секунд после открытия сайта
const modal = document.querySelector(".modal"),
  timerId = setTimeout(() => {
    modal.style.display = "block";
  }, 10000);

function showModalEndPage() {
  if (Math.ceil(window.pageYOffset + document.documentElement.clientHeight) == document.documentElement.scrollHeight) {
    modal.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
    clearInterval(timerId);
    // Если долистав до конца модально окно показалось, при сленующем листании до конца отключить вновь показ
    window.removeEventListener("scroll", showModalEndPage);
  }
}

// Пользователь проскролил до конца страницы - показываем ему модальное окно
window.addEventListener("scroll", showModalEndPage);

//Модалное окно срабатывает при нажатии на кнопки у которых есть дата атрибут data-modal (можно сделать по классу, либо по дата атрибуту)
document.addEventListener("click", (evt) => {
  // Открытие модального окна
  if (evt.target.hasAttribute("data-modal")) {
    modal.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
    clearInterval(timerId);
  }
  // Тут происходить закрытие модального окна (можно сделать по классу, либо по дата атрибуту)
  if (evt.target.hasAttribute("data-close")) {
    modal.style.display = "none";
    document.querySelector("body").style.overflow = "";
  }
});
// круговой процентный прогресс бар
  const progress = document.querySelector(".progress");
  const progressNumber = progress.querySelector(".progress__number").textContent.trim();
  if (progress && progressNumber) {
    progress.style = `--progress: ${progressNumber}%`;
    progress.querySelector("progress").setAttribute("value", progressNumber);
    progress.querySelector(".progress__number").textContent = `${progressNumber}%`;
  }
});

// Переключение темы
  switch (localStorage.getItem("theme")) {
    case "dark-theme":
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      break;
    default:
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      break;
  }

  const themes = document.querySelectorAll(".theme input");
  if (themes.length > 0) {
    themes.forEach((theme) => {
      theme.addEventListener("change", () => {
        switch (document.body.classList.contains("light-theme")) {
          case true:
            localStorage.setItem("theme", "dark-theme");
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            break;
          case false:
            localStorage.removeItem("theme");
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            break;
        }
      });
    });
  }

*/
});
