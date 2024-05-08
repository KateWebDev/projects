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
    document.querySelector(".header__burger").classList.remove("header__burger--avtive");
  }
});

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
*/

//Звездный рейтинг
/*
// если нам нужно чтобы рейтинг у каждого был свой. то дабавляем дата атрибут со своим значением в html : data-rateyo-rating="4.3"

$(".products__raiting").rateYo({
    starWidth: "17px", //размер звездочек
    normalFill: "#ccccce", // цвет не закрашенных звездочек
    ratedFill: "#ffc35b", // цвет закрашенных звездочек
    readOnly: true // при наведении на звездочки рейтинг не изменяется и не ховерится
});
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
// Показать еще

const btnAdd = document.querySelector(".portfolio__add");

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
*/

// Если нужнол чтобы на 1 размере экрана было 6 карточек, а при уменьшении экрана стало 4 карточки
/*
const linksTeam = document.querySelectorAll(".team__item");
window.addEventListener("resize", function () {
  if (window.innerWidth < 693) {
    linksTeam.forEach((linkTime) => {
      linkTime.classList.remove("hidden");
    });
    for (let i = 0; i < linksTeam.length; i++) {
      if (i > 3) {
        linksTeam[i].classList.add("hidden");
      }
    }
  } else {
    linksTeam.forEach((linkTime) => {
      linkTime.classList.remove("hidden");
    });
    for (let i = 0; i < linksTeam.length; i++) {
      if (i > 5) {
        linksTeam[i].classList.add("hidden");
      }
    }
  }
});
*/

// Аккардеон
/*
const questions = document.querySelectorAll(".accardeon__name"); // это кнопка button на которую мы будем нажимать, и в которой написан наш вопрос

questions.forEach((question) => {
  question.addEventListener("click", (evt) => {
    // в запросе сразу после кнопки идет текст с ответом, отсюда и используется nextElementSibling (смотрит соседний элемент кнопки)
    question.nextElementSibling.classList.toggle("accardeon__text--active"); // чтоб текст показывать (opacity: 1)
    question.classList.toggle("accardeon__name--active"); //чтоб стрелочку переворачивать
  question.parentNode.classList.toggle("accardeon__item--active"); //если нужно что-то изменить в родителе accardeon__item (например цвет заливки)
    if (question.nextElementSibling.classList.contains("accardeon__text--active")) {
      question.nextElementSibling.style.maxHeight = question.nextElementSibling.scrollHeight + "px";
    } else {
      question.nextElementSibling.style.maxHeight = null;
    }
  });
});
*/

// Табы
/*
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
// cookie
/*
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
let mixer = mixitup(".project__items");
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
$("input[type=tel]").mask("+7 (999) 999-99-99");
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
