const header = document.querySelector(".header");
let heightHeader = header.offsetHeight;

document.addEventListener("scroll", () => {
  if (window.pageYOffset > heightHeader) {
    header.classList.add("header--fixed");
  } else {
    header.classList.remove("header--fixed");
  }
});

document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu__items").classList.toggle("menu__items--active");
    document.querySelector("body").classList.toggle("lock");
  } else {
    document.querySelector(".menu__items").classList.remove("menu__items--active");
    document.querySelector("body").classList.remove("lock");
  }
});

document.addEventListener("keyup", (evt) => {
  if (evt.key === "Escape") {
    document.querySelector(".menu__items").classList.remove("menu__items--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".close").classList.remove("close--active");
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

const blueBtn = document.querySelector(".products__btn.products__btn--blue");
const redBtn = document.querySelector(".products__btn.products__btn--red");
const blackBtn = document.querySelector(".products__btn.products__btn--black");
const greenBtn = document.querySelector(".products__btn.products__btn--green");
const whiteBtn = document.querySelector(".products__btn.products__btn--white");

const blues = document.querySelectorAll(".blue");
const reds = document.querySelectorAll(".red");
const blacks = document.querySelectorAll(".black");
const greens = document.querySelectorAll(".green");
const whites = document.querySelectorAll(".white");

const intro = document.querySelector(".intro");

blueBtn.addEventListener("click", () => {
  blues.forEach((blue) => {
    blue.classList.remove("hidden");
  });
  reds.forEach((red) => {
    red.classList.add("hidden");
  });
  blacks.forEach((black) => {
    black.classList.add("hidden");
  });
  greens.forEach((green) => {
    green.classList.add("hidden");
  });
  whites.forEach((white) => {
    white.classList.add("hidden");
  });
  document.querySelector(".products__item.products__item--blue").classList.add("hidden");
  document.querySelector(".products__item.products__item--red").classList.remove("hidden");
  document.querySelector(".products__item.products__item--black").classList.remove("hidden");
  document.querySelector(".products__item.products__item--green").classList.remove("hidden");
  document.querySelector(".products__item.products__item--white").classList.remove("hidden");

  intro.classList.add("color-blue");
  intro.classList.remove("color-red");
  intro.classList.remove("color-black");
  intro.classList.remove("color-green");
  intro.classList.remove("color-white");
});

redBtn.addEventListener("click", () => {
  blues.forEach((blue) => {
    blue.classList.add("hidden");
  });
  reds.forEach((red) => {
    red.classList.remove("hidden");
  });
  blacks.forEach((black) => {
    black.classList.add("hidden");
  });
  greens.forEach((green) => {
    green.classList.add("hidden");
  });
  whites.forEach((white) => {
    white.classList.add("hidden");
  });
  document.querySelector(".products__item.products__item--blue").classList.remove("hidden");
  document.querySelector(".products__item.products__item--red").classList.add("hidden");
  document.querySelector(".products__item.products__item--black").classList.remove("hidden");
  document.querySelector(".products__item.products__item--green").classList.remove("hidden");
  document.querySelector(".products__item.products__item--white").classList.remove("hidden");

  intro.classList.remove("color-blue");
  intro.classList.add("color-red");
  intro.classList.remove("color-black");
  intro.classList.remove("color-green");
  intro.classList.remove("color-white");
});

blackBtn.addEventListener("click", () => {
  blues.forEach((blue) => {
    blue.classList.add("hidden");
  });
  reds.forEach((red) => {
    red.classList.add("hidden");
  });
  blacks.forEach((black) => {
    black.classList.remove("hidden");
  });
  greens.forEach((green) => {
    green.classList.add("hidden");
  });
  whites.forEach((white) => {
    white.classList.add("hidden");
  });
  document.querySelector(".products__item.products__item--blue").classList.remove("hidden");
  document.querySelector(".products__item.products__item--red").classList.remove("hidden");
  document.querySelector(".products__item.products__item--black").classList.add("hidden");
  document.querySelector(".products__item.products__item--green").classList.remove("hidden");
  document.querySelector(".products__item.products__item--white").classList.remove("hidden");

  intro.classList.remove("color-blue");
  intro.classList.remove("color-red");
  intro.classList.add("color-black");
  intro.classList.remove("color-green");
  intro.classList.remove("color-white");
});

greenBtn.addEventListener("click", () => {
  blues.forEach((blue) => {
    blue.classList.add("hidden");
  });
  reds.forEach((red) => {
    red.classList.add("hidden");
  });
  blacks.forEach((black) => {
    black.classList.add("hidden");
  });
  greens.forEach((green) => {
    green.classList.remove("hidden");
  });
  whites.forEach((white) => {
    white.classList.add("hidden");
  });
  document.querySelector(".products__item.products__item--blue").classList.remove("hidden");
  document.querySelector(".products__item.products__item--red").classList.remove("hidden");
  document.querySelector(".products__item.products__item--black").classList.remove("hidden");
  document.querySelector(".products__item.products__item--green").classList.add("hidden");
  document.querySelector(".products__item.products__item--white").classList.remove("hidden");

  intro.classList.remove("color-blue");
  intro.classList.remove("color-red");
  intro.classList.remove("color-black");
  intro.classList.add("color-green");
  intro.classList.remove("color-white");
});

whiteBtn.addEventListener("click", () => {
  blues.forEach((blue) => {
    blue.classList.add("hidden");
  });
  reds.forEach((red) => {
    red.classList.add("hidden");
  });
  blacks.forEach((black) => {
    black.classList.add("hidden");
  });
  greens.forEach((green) => {
    green.classList.add("hidden");
  });
  whites.forEach((white) => {
    white.classList.remove("hidden");
  });
  document.querySelector(".products__item.products__item--blue").classList.remove("hidden");
  document.querySelector(".products__item.products__item--red").classList.remove("hidden");
  document.querySelector(".products__item.products__item--black").classList.remove("hidden");
  document.querySelector(".products__item.products__item--green").classList.remove("hidden");
  document.querySelector(".products__item.products__item--white").classList.add("hidden");

  intro.classList.remove("color-blue");
  intro.classList.remove("color-red");
  intro.classList.remove("color-black");
  intro.classList.remove("color-green");
  intro.classList.add("color-white");
});
