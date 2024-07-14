document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu-top").classList.toggle("menu-top--active");
    document.querySelector("body").classList.toggle("lock");
    document.querySelector(".header__burger").classList.toggle("header__burger--active");
  } else if (!evt.target.closest(".arrow")) {
    document.querySelector(".menu").classList.remove("menu-top--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header__burger").classList.remove("header__burger--avtive");
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
});

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

const closeBtnNotice = document.querySelector(".notice .close");

if (closeBtnNotice) {
  closeBtnNotice.addEventListener("click", () => {
    document.querySelector(".notice").style.display = "none";
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

const btnFilter = document.querySelector(".catalog__button.catalog__button--filter");
const filter = document.querySelector(".filters");

if (btnFilter) {
  btnFilter.addEventListener("click", () => {
    if (filter) {
      filter.classList.toggle("filters--active");
      btnFilter.classList.toggle("catalog__button--active");
      let heightFilter = filter.offsetHeight;

      if (document.querySelector(".filters.filters--active")) {
        document.querySelector(".catalog__products").style.paddingTop = `${heightFilter - 50}px`;
      } else {
        document.querySelector(".catalog__products").style.paddingTop = 0;
      }
    }
  });
}
