document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu").classList.toggle("menu--active");
    document.querySelector("body").classList.toggle("lock");
    document.querySelector(".header__burger").classList.toggle("header__burger--active");
  } else {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header__burger").classList.remove("header__burger--avtive");
  }
});

document.addEventListener("keyup", (evt) => {
  if (evt.key === "Escape") {
    document.querySelector(".menu__items").classList.remove("menu__items--active");
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
  }
  if (evt.target.closest(".up") || evt.target.closest(".logo__img")) {
    let links = document.querySelectorAll(".menu__link");
    links.forEach((link) => {
      link.classList.remove("menu__link--active");
    });
    document.querySelectorAll(".menu__link")[0].classList.add("menu__link--active");
  }
});

document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__btn")) {
    let links = document.querySelectorAll(".header__btn");
    links.forEach((link) => {
      link.classList.remove("header__btn--active");
    });
    evt.target.classList.add("header__btn--active");
  }
  if (evt.target.closest(".up") || evt.target.closest(".logo__img")) {
    let links = document.querySelectorAll(".header__btn");
    links.forEach((link) => {
      link.classList.remove("header__btn--active");
    });
    document.querySelectorAll(".header__btn")[0].classList.add("header__btn--active");
  }
});

const periods = document.querySelectorAll(".intro__period");
const prices = document.querySelectorAll(".intro__num");
let periodName = periods[1].getAttribute("data-period");

document.addEventListener("click", (evt) => {
  if (evt.target.closest(".intro__period") && periodName == "Month") {
    periods.forEach((period) => {
      period.setAttribute("data-period", "Day");
      period.textContent = "/Days";
      periodName = "Day";
    });
    prices.forEach((price) => {
      price.textContent = Math.round(price.textContent / 30);
    });
  } else if (evt.target.closest(".intro__period") && periodName == "Day") {
    periods.forEach((period) => {
      period.setAttribute("data-period", "Month");
      period.textContent = "/Months";
      periodName = "Month";
    });
    prices.forEach((price) => {
      price.textContent = Math.round(price.textContent * 30);
    });
  }
});

const currencys = document.querySelectorAll(".intro__currency");
let currencyName = "d";

document.addEventListener("click", (evt) => {
  if (evt.target.closest(".intro__currency") && currencyName == "d") {
    currencyName = "r";
    for (let i = 0; i < currencys.length; i++) {
      currencys[i].innerHTML = "&#8381;";
      prices[i].textContent = Math.round(prices[i].textContent * 89);
    }
  } else if (evt.target.closest(".intro__currency") && currencyName == "r") {
    currencyName = "e";
    for (let i = 0; i < currencys.length; i++) {
      currencys[i].innerHTML = "&euro;";
      prices[i].textContent = Math.round(prices[i].textContent / 97);
    }
  } else if (evt.target.closest(".intro__currency") && currencyName == "e") {
    currencyName = "d";
    for (let i = 0; i < currencys.length; i++) {
      currencys[i].innerHTML = "&#36;";
      prices[i].textContent = Math.round(prices[i].textContent * 1.09);
    }
  }
});
