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

// Аккардеон
const questions = document.querySelectorAll(".accardeon__name");

if (questions.length > 0) {
  questions.forEach((question) => {
    question.nextElementSibling.style.maxHeight = 0;
    question.addEventListener("click", (evt) => {
      question.nextElementSibling.classList.toggle("accardeon__text--active");
      question.classList.toggle("accardeon__name--active");
      question.parentNode.classList.toggle("accardeon__item--active");
      if (question.nextElementSibling.classList.contains("accardeon__text--active")) {
        question.nextElementSibling.style.maxHeight = question.nextElementSibling.scrollHeight + "px";
      } else {
        question.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
}

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

if (document.querySelector(".reviews__slider")) {
  const swiper = new Swiper(".reviews__slider", {
    navigation: {
      prevEl: ".reviews__button.reviews__button--prev",
      nextEl: ".reviews__button.reviews__button--next",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    autoHeight: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
}

document.querySelectorAll("textarea").forEach((el) => {
  el.style.height = el.setAttribute("style", "height: " + el.scrollHeight + "px");
  el.classList.add("auto");
  el.addEventListener("input", (e) => {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  });
});
